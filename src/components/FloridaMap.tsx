import { motion } from "framer-motion";

const serviceAreas = [
  { name: "Miami", x: 73, y: 88 },
  { name: "Orlando", x: 68, y: 58 },
  { name: "Tampa", x: 52, y: 60 },
  { name: "Jacksonville", x: 68, y: 28 },
  { name: "Fort Lauderdale", x: 76, y: 84 },
  { name: "West Palm Beach", x: 78, y: 78 },
];

export function FloridaMap() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full max-w-[220px] max-h-[220px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified Florida outline */}
        <path
          d="M55,8 L75,8 L78,12 L76,18 L78,22 L76,28 L74,35 L72,42 L70,48 L68,52 L65,56 L60,60 L55,65 L52,62 L48,64 L45,62 L42,65 L40,62 L38,58 L40,55 L42,50 L48,48 L50,44 L52,40 L55,35 L58,30 L60,24 L58,18 L56,14 Z
                M65,56 L68,60 L72,65 L75,70 L78,74 L80,78 L78,82 L76,86 L73,90 L70,92 L68,90 L70,86 L72,82 L70,78 L68,74 L65,70 L62,66 L60,62 Z
                M42,65 L38,68 L35,72 L32,68 L30,64 L32,60 L36,58 L40,60 Z"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.8"
          opacity="0.4"
        />
        <path
          d="M55,8 L75,8 L78,12 L76,18 L78,22 L76,28 L74,35 L72,42 L70,48 L68,52 L65,56 L60,60 L55,65 L52,62 L48,64 L45,62 L42,65 L40,62 L38,58 L40,55 L42,50 L48,48 L50,44 L52,40 L55,35 L58,30 L60,24 L58,18 L56,14 Z
                M65,56 L68,60 L72,65 L75,70 L78,74 L80,78 L78,82 L76,86 L73,90 L70,92 L68,90 L70,86 L72,82 L70,78 L68,74 L65,70 L62,66 L60,62 Z
                M42,65 L38,68 L35,72 L32,68 L30,64 L32,60 L36,58 L40,60 Z"
          fill="hsl(var(--primary))"
          opacity="0.08"
        />

        {/* Service area markers */}
        {serviceAreas.map((area, i) => (
          <g key={area.name}>
            <motion.circle
              cx={area.x}
              cy={area.y}
              r="3"
              fill="hsl(var(--primary))"
              opacity="0.3"
              animate={{ r: [3, 5, 3], opacity: [0.3, 0.1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
            <motion.circle
              cx={area.x}
              cy={area.y}
              r="1.5"
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
            />
            <motion.text
              x={area.x}
              y={area.y - 5}
              textAnchor="middle"
              fill="white"
              fontSize="3"
              fontWeight="500"
              opacity="0.7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8 + i * 0.15 }}
            >
              {area.name}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}
