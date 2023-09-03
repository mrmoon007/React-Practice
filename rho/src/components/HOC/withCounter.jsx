import React, { useState } from "react";

const withCounter = (OriginalComponent) => {

    const NewComponent = () => {
        const [count, setCount] = useState(0); // Initialize count to 0
        const handleCount = () => {
            setCount(count + 1);
        }
        return <OriginalComponent handleCount={handleCount} count={count} />
    }
    return NewComponent;
}

export default withCounter;
