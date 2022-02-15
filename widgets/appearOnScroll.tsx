import { useEffect, useRef, useState } from "react"

export interface AppearOnScrollProps {
    children: React.ReactNode | React.ReactNode[]
}

export const AppearOnScroll = (props: AppearOnScrollProps) => {
    let [opacity, setOpacity] = useState(0)
    let ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current !== null) {
            let current = ref.current
            let observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    setOpacity(entry.intersectionRatio)
                })
            }, {
                root: null,
                rootMargin: '0px',
                threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            })

            observer.observe(current)
            return () => {
                observer.unobserve(current)
            }
        }
    }, [ref])

    return <div ref={ ref } style={{opacity: opacity}}>
        { props.children }
    </div>
}