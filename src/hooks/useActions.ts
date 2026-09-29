import { bindActionCreators } from "redux"
import { transactionsSlice } from "@/features/transactions/transactionsSlice"
import { useAppDispatch} from "@/app/hooks"

const allActions = {
	...transactionsSlice.actions
}


export const useActions = () => {
	const dispatch = useAppDispatch()
	return bindActionCreators(allActions, dispatch)
}