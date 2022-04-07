import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const useScroll = () => {
    const control = useAnimation()
    const [element, view] = useInView({ threshold: 0.5, triggerOnce: true })

    view ? control.start('show') : control.start('hidden')

    return [element, control]
}
