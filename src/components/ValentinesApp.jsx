import { useState } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";


const days = [
    { day: 7, title: "Rose Day 🌹", question: "A rose for you — what color describes our love?" },
    { day: 8, title: "Propose Day 💍", question: "If I proposed right now, what would you say?" },
    { day: 9, title: "Chocolate Day 🍫", question: "Which chocolate reminds you of me?" },
    { day: 10, title: "Teddy Day 🧸", question: "Can I be your teddy on bad days?" },
    { day: 11, title: "Promise Day 🤞", question: "What promise should we make to each other?" },
    { day: 12, title: "Hug Day 🤗", question: "How long should our hug last?" },
    { day: 13, title: "Kiss Day 💋", question: "Where should our first kiss of the day be?" },
    { day: 14, title: "Valentine’s Day ❤️", question: "Will you be my Valentine?" }
];


export default function ValentineApp() {
    const [currentDay, setCurrentDay] = useState(0);


    const nextDay = () => {
        if (currentDay < days.length - 1) {
            setCurrentDay(currentDay + 1);
        }
    };


    const current = days[currentDay];


    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-100 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="max-w-md w-full shadow-xl rounded-2xl">
                    <CardContent className="p-6 text-center space-y-6">
                        <h1 className="text-2xl font-bold text-pink-600">{current.title}</h1>


                        {/* Video Section */}
                        {current.video && (
                            <video
                                className="w-full rounded-xl shadow"
                                controls
                                playsInline
                            >
                                <source src={current.video} type="video/mp4" />
                            </video>
                        )}


                        <p className="text-lg text-gray-700">{current.question}</p>


                        {currentDay < days.length - 1 ? (
                            <Button className="w-full rounded-xl" onClick={nextDay}>
                                Next Day 💌
                            </Button>
                        ) : (
                            <p className="text-xl font-semibold text-red-500">
                                Happy Valentine’s Day ❤️
                            </p>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}