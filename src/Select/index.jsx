
const pos = [
    { value: "gol", name: "Golero" },
    { value: "dfc", name: "Defensa Central" },
    { value: "dfi", name: "Defensa Izquierdo" },
    { value: "dfd", name: "Defensa Derecho" },
    { value: "mc", name: "Mediocentro " },
    { value: "mdi", name: "Mediocentro Izquierdo" },
    { value: "mcd", name: "Mediocentro Derecho" },
    { value: "dtc", name: "Delantero Central" },
    { value: "dti", name: "Delantero Izquierdo" },
    { value: "dtd", name: "Delantero Derecho" },
]

export const Select = () => {
    return (
        <select className="border-2 text-center">
            {pos.map(pos => <option key={pos.value} value={pos.value}>{pos.name}</option>)}
        </select>
    )
}