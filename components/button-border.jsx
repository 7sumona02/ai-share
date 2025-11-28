"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon } from "lucide-react";
import { motion } from "motion/react";

export function ButtonDemo() {
  return (
    <div className="flex gap-3">

      {/* Button 2 */}
      <Button
        variant="outline"
        className="relative bg-black text-white"
      >
        <div
          className={cn(
            "-inset-px pointer-events-none absolute rounded-[inherit] border-2 border-transparent border-inset [mask-clip:padding-box,border-box]",
            "[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
          )}
        >
          <motion.div
            className="absolute aspect-square"
            style={{
              width: 20,
              offsetPath: `rect(0 auto auto 0 round ${20}px)`,
              background: `linear-gradient(to right, transparent, #7dd3fc, #7dd3fc)`,
            }}
            animate={{
              offsetDistance: ["0%", "100%"],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              ease: "linear",
            }}
          />
        </div>
        Animated Border
      </Button>
    </div>
  );
}
