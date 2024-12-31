import { ReactNode } from "react"

type dataChildren = {
    children: ReactNode
}


export function Container({children}: dataChildren) {
    return(
        <div className="px-5 sm:px-10">
            {children}
        </div>
    )
}