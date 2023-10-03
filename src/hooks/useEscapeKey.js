import React from "react"

function useEscapeKey(callback) {
  React.useEffect(() => {
    window.addEventListener("keyup", callback)

    return () => {
      window.removeEventListener("keyup", callback)
    }
  }, [callback])
}

export default useEscapeKey