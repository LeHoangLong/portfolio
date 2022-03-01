import { useEffect, useRef, useState } from "react"
import styles from './icon.module.scss'

export interface IconProps {
    durationMs: number
    onAnimationFinished: () => void
}

export const Icon = (props: IconProps) => {
    let size = 240
    let ref = useRef<HTMLCanvasElement>(null)
    let [initialClass, setInitialClass] = useState(size === 0? styles.initial : styles.initial_show)

    useEffect(() => {
        let current = ref.current
        let radius = size / 2 - 10
        let middle = size / 2
        let percentPerSegment = 1 / 9

        if (current != null) {
            if (props.durationMs !== 0) {
                let start: number | undefined
                let initialAnimationTimeout: NodeJS.Timeout | undefined

                let animateBorder = (timestamp: number) => {
                    if (start == undefined) {
                        start = timestamp
                    }

                    let elapsed = timestamp - start
                    let totalDuration = props.durationMs * 0.8
                    let percent = elapsed / totalDuration
                    
                    if (current !== null) {
                        let ctx = current?.getContext('2d')
                        if (ctx !== null) {
                            ctx.clearRect(0, 0, current.width, current.height)
                            ctx.strokeStyle = getComputedStyle(current, styles.canvas).color
                            ctx.shadowColor = getComputedStyle(current, styles.canvas).color
                            ctx.shadowBlur = 10
                            ctx.lineWidth = 20
                            ctx.beginPath()
                            ctx.lineCap = 'round'

                            let angle = Math.PI / 8
                            let initialX = middle +  Math.floor(radius * Math.cos(angle))
                            let initialY = middle - Math.floor(radius * Math.sin(angle))
                            ctx.moveTo(initialX, initialY);

                            for (var i = 1; i < 10; i++) {
                                if (percent <= percentPerSegment * i) {
                                    break
                                }

                                let angle = Math.PI * i / 4 + Math.PI / 8
                                let prevAngle = Math.PI * (i - 1) / 4 + Math.PI / 8
                                

                                let targetX = middle +  Math.floor(radius * Math.cos(angle))
                                let targetY = middle - Math.floor(radius * Math.sin(angle))

                                let prevX = middle +  Math.floor(radius * Math.cos(prevAngle))
                                let prevY = middle - Math.floor(radius * Math.sin(prevAngle))

                                let segmentPercent = (percent - percentPerSegment * i) / percentPerSegment
                                if (segmentPercent > 1) {
                                    segmentPercent = 1
                                }
                                let x = (targetX - prevX) * segmentPercent + prevX
                                let y = (targetY - prevY) * segmentPercent + prevY

                                ctx.lineTo(x, y);
                            }
                            ctx.stroke()
                        }
                    }
                    if (percent < 1) {
                        requestAnimationFrame(animateBorder)
                    } else {
                        setInitialClass(styles.initial_transition)
                        initialAnimationTimeout = setTimeout(props.onAnimationFinished, 800)
                    }
                }

                let animation = requestAnimationFrame(animateBorder)

                return () => {
                    cancelAnimationFrame(animation)
                    if (initialAnimationTimeout !== undefined) {
                        clearTimeout(initialAnimationTimeout)
                    }
                }
            } else {
                let ctx = current.getContext('2d')
                if (ctx != null) {
                    ctx.strokeStyle = getComputedStyle(current, styles.canvas).color
                    ctx.shadowColor = getComputedStyle(current, styles.canvas).color
                    ctx.shadowBlur = 10
                    ctx.lineWidth = 20
                    ctx.beginPath()
                    for (var i = 1; i < 10; i++) {
                        let angle = Math.PI * i / 4 + Math.PI / 8
                        let x = middle +  Math.floor(radius * Math.cos(angle))
                        let y = middle - Math.floor(radius * Math.sin(angle))
                        ctx.lineTo(x, y)
                    }
                    ctx.closePath()
                    ctx.stroke()
                    setInitialClass(styles.initial_transition)
                }
            }
        }
    }, [props.onAnimationFinished, props.durationMs, size])
        
        
    return (
        <div className={styles.icon } style={{
            width: `${size}px`,
            height: `${size}px`,
        }}>
            <canvas ref={ref} width={size} height={size} className={styles.canvas}></canvas>
            <p className={ initialClass }>L</p>
        </div>
    )
}