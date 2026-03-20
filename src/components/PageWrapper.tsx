
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";

export const PageWrapper = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen pt-24 pb-8 flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};
