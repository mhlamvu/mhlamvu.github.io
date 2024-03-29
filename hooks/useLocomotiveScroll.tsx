import React, { useEffect, useState } from 'react'
import LocomotiveScroll, { LocomotiveScrollOptions, Scroll } from 'locomotive-scroll'

type UseLocomotiveScrollHook = [Scroll | null]

type Props = {
    ref: React.RefObject<Element>
} & Omit<LocomotiveScrollOptions, 'el'>

const useLocomotiveScroll = ({ ref, ...otherProps}: Props): UseLocomotiveScrollHook => {
    const [locomotiveScrollRef, setRef] = useState<Scroll | null>(null)

    useEffect(() => {
        if(ref?.current) {
            import('locomotive-scroll').then(locomotiveModule => {
                const scroll = new locomotiveModule.default({
                    el: ref.current,
                    lerp: .05,
                    smooth: true,
                    smartphone: { smooth: true },
                    tablet: { smooth: true },
                    ...otherProps
                })

                setRef(scroll)
            })
        }

        return () => {
            locomotiveScrollRef?.destroy()
        }
    }, [ref])

    return [ locomotiveScrollRef ]
}

export default useLocomotiveScroll