"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category?: string;
  variantLabel?: string;
  volume?: string;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (
    item: {
      id: string;
      name: string;
      price: number;
      image: string;
      category?: string;
      variantLabel?: string;
      volume?: string;
    },
    quantity?: number,
  ) => void;
  removeFromCart: (id: string, variantLabel?: string) => void;
  updateQuantity: (id: string, quantity: number, variantLabel?: string) => void;
  clearCart: () => void;
  subtotal: number;
  totalItems: number;
  shippingThreshold: number;
  shippingCost: number;
  freeShippingProgress: number;
  amountToFreeShipping: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "gl_glow_cart_v1";
const FREE_SHIPPING_THRESHOLD = 75;
const STANDARD_SHIPPING_COST = 10;

// Pre-seed cart with 1 initial product for luxury immersion if desired, or let it load from localStorage
const INITIAL_DEMO_ITEMS: CartItem[] = [
  {
    id: "serum",
    name: "Hydrating Serum",
    price: 42,
    image: "/images/product-serum.png",
    quantity: 1,
    category: "skincare",
    variantLabel: "Full Size",
    volume: "50ml",
  },
];

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
          setIsHydrated(true);
          return;
        }
      }
      // If nothing saved yet, seed with demo item so user sees cart content right away
      setItems(INITIAL_DEMO_ITEMS);
    } catch {
      setItems(INITIAL_DEMO_ITEMS);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage whenever items change after initial hydration
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore write errors
    }
  }, [items, isHydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const addToCart = useCallback(
    (
      newItem: {
        id: string;
        name: string;
        price: number;
        image: string;
        category?: string;
        variantLabel?: string;
        volume?: string;
      },
      quantity = 1,
    ) => {
      setItems((prev) => {
        const existingIndex = prev.findIndex(
          (i) =>
            i.id === newItem.id &&
            (i.variantLabel || "") === (newItem.variantLabel || ""),
        );

        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + quantity,
          };
          return updated;
        }

        return [
          ...prev,
          {
            id: newItem.id,
            name: newItem.name,
            price: newItem.price,
            image: newItem.image,
            category: newItem.category,
            variantLabel: newItem.variantLabel,
            volume: newItem.volume,
            quantity,
          },
        ];
      });

      // Automatically open drawer when adding to cart
      setIsOpen(true);
    },
    [],
  );

  const removeFromCart = useCallback((id: string, variantLabel?: string) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.id === id && (i.variantLabel || "") === (variantLabel || "")),
      ),
    );
  }, []);

  const updateQuantity = useCallback(
    (id: string, newQuantity: number, variantLabel?: string) => {
      if (newQuantity <= 0) {
        removeFromCart(id, variantLabel);
        return;
      }
      setItems((prev) =>
        prev.map((i) => {
          if (
            i.id === id &&
            (i.variantLabel || "") === (variantLabel || "")
          ) {
            return { ...i, quantity: newQuantity };
          }
          return i;
        }),
      );
    },
    [removeFromCart],
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const totalItems = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const shippingCost = useMemo(() => {
    if (subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD) return 0;
    return STANDARD_SHIPPING_COST;
  }, [subtotal]);

  const freeShippingProgress = useMemo(() => {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) return 100;
    return Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  }, [subtotal]);

  const amountToFreeShipping = useMemo(() => {
    return Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  }, [subtotal]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      subtotal,
      totalItems,
      shippingThreshold: FREE_SHIPPING_THRESHOLD,
      shippingCost,
      freeShippingProgress,
      amountToFreeShipping,
    }),
    [
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      subtotal,
      totalItems,
      shippingCost,
      freeShippingProgress,
      amountToFreeShipping,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
