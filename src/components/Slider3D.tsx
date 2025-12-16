"use client";

interface Slider3DProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  labels?: string[];
}

export default function Slider3D({
  value,
  onChange,
  min = 1,
  max = 3,
  step = 1,
  labels = ["Mild", "Medium", "Hot"]
}: Slider3DProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-3d"
          style={{
            background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
          }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          {labels.map((label, index) => (
            <span key={index} className={value === index + 1 ? "text-red-600 font-semibold" : ""}>
              {label}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .slider-3d::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transform: rotateX(45deg);
          border: 2px solid white;
        }
        .slider-3d::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border: 2px solid white;
        }
      `}</style>
    </div>
  );
}