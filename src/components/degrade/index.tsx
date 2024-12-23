export function Degrade({order}: {order: boolean}) {
    return(
        <div className={order ? "bg-gradient-to-r from-indigo-500 ...":'bg-gradient-to-l from #69B99D'}>
        </div>
    )
} 