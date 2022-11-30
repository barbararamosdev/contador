import React from "react";
import { useState } from "react";

export function Contador() {
    const [valorContador, setContador] = useState(0)

    const somaContador = () => {
        setContador(valorContador + 1)
    }
    const subtraiContador = () => {
        setContador(valorContador - 1)
    }

    return (
        <div>
            <h1>{valorContador}</h1>
            <button onClick={subtraiContador}>-</button>
            <button onClick={somaContador}>+</button>
        </div>
    )

}
