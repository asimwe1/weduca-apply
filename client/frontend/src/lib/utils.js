export function cn(...classes) {
    return classes
      .filter(Boolean)
      .map((entry) => {
        if (typeof entry === "object") {
          return Object.keys(entry)
            .filter((key) => entry[key])
            .join(" ")
        }
        return entry
      })
      .join(" ")
    
  }
  
  