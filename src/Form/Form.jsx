import { useState } from "react"

export default function Form({liftSearch}){
    const [search, setSearch] = useState("")

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        liftSearch(search)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Search:</label>
            <input
                type="text"
                name="search"
                placeholder="Gif Search"
                onChange={handleChange}
                value={search}
            />
            <button type="submit">Submit</button>
        </form>
    )
}