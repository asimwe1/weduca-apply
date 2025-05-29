import React from "react"
import { cn } from "../../lib/utils";

import { forwardRef } from "react"
import { Check } from "lucide-react"

const Checkbox = forwardRef(
  ({ className, onCheckedChange, checked, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className="absolute h-4 w-4 opacity-0"
          ref={ref}
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          {...props}
        />
        <div
          className={cn(
            "h-4 w-4 rounded border border-primary flex items-center justify-center",
            checked ? "bg-primary" : "bg-transparent",
            className,
          )}
        >
          {checked && <Check className="h-3 w-3 text-primary-foreground" />}
        </div>
      </div>
    )
  },
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
