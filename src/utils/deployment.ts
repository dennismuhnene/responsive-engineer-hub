// Deployment configuration and utilities
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// Environment variables validation
export const validateEnv = () => {
  const requiredEnvVars = [
    'VITE_EMAILJS_PUBLIC_KEY',
    'VITE_EMAILJS_SERVICE_ID', 
    'VITE_EMAILJS_TEMPLATE_ID'
  ];

  const missing = requiredEnvVars.filter(envVar => !import.meta.env[envVar]);
  
  if (missing.length > 0 && isProduction) {
    console.warn('Missing environment variables:', missing);
    return false;
  }
  
  return true;
};

// Initialize app with proper error handling
export const initializeApp = () => {
  try {
    validateEnv();
    console.log('✅ App initialized successfully');
    return true;
  } catch (error) {
    console.error('❌ App initialization failed:', error);
    return false;
  }
};