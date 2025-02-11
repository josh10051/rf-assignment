import React from "react";
import { motion } from "framer-motion";
import { Trash2, } from "lucide-react";

interface CardProps {
    id: number;
    title: string;
    description: string;
    onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, title, description, onDelete }) => {
    return (
        <motion.div
            className="bg-white shadow-lg rounded-2xl p-4 w-80 relative flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <button
                className="absolute top-3 right-3 hover:bg-red-600 text-white p-2 rounded-full"
                onClick={() => onDelete(id)}
            >
                <Trash2 color="red" size={20} />
            </button>
        </motion.div>
    );
};

export default Card;
