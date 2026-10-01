import { bindActionCreators } from "redux"
import { transactionsSlice } from "@/features/transactions/transactionsSlice"
import { useAppDispatch} from "@/app/hooks"
import { budgetsSlice } from "@/features/budget/budgetsSlice"
import { goalsSlice } from "@/features/goals/goalsSlice"

const allActions = {
	...transactionsSlice.actions,
	...budgetsSlice.actions,
	...goalsSlice.actions
}


export const useActions = () => {
	const dispatch = useAppDispatch()
	return bindActionCreators(allActions, dispatch)
}
