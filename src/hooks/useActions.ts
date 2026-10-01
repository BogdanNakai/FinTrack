import { bindActionCreators } from "redux"
import { transactionsSlice } from "@/features/transactions/transactionsSlice"
import { useAppDispatch} from "@/app/hooks"
import { budgetsSlice } from "@/features/budget/budgetsSlice"

const allActions = {
	...transactionsSlice.actions,
	...budgetsSlice.actions
}


export const useActions = () => {
	const dispatch = useAppDispatch()
	return bindActionCreators(allActions, dispatch)
}