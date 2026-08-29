// Configuración del proyecto Firebase de Malvens Woman.
// La usan tanto index.html (la página pública) como admin.html (el panel).
// La apiKey es pública por diseño en apps web de Firebase: la seguridad real
// la dan las Reglas de Firestore/Storage (solo un usuario autenticado puede
// escribir), no el secreto de este archivo.
export const firebaseConfig = {
  apiKey: "AIzaSyDxK5obhhH0iWsNWgrQWZLcjJimPJDZwkw",
  authDomain: "malvens-woman.firebaseapp.com",
  projectId: "malvens-woman",
  storageBucket: "malvens-woman.firebasestorage.app",
  messagingSenderId: "735122052905",
  appId: "1:735122052905:web:4dc651a303558c03544938"
};

// Categorías del catálogo — se usan en la página pública y en el admin.
export const CATEGORIES = ["Anillos", "Aretes", "Collares", "Pulseras", "Sets"];

// Ícono de línea de respaldo por categoría, para productos que todavía no tienen foto.
export const CATEGORY_ICON = {
  "Anillos": "ring",
  "Aretes": "earring",
  "Collares": "necklace",
  "Pulseras": "bracelet",
  "Sets": "set"
};
