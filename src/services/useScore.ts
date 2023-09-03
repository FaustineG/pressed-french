import {computed} from "vue"
import useScoreStore from "@/stores/score"

const useScore = () => {
    const scoreStore = useScoreStore();

    return { score: computed(()=>scoreStore.score), findWord: scoreStore.findWord }
}

export default useScore;