import { useGetDashboardMetricsQuery } from "@/state/api";

const CardExpenseSummary = () => {


    const { data, isLoading } = useGetDashboardMetricsQuery();
    console.log(data)
    const expenseSummary = data?.expenseSummary;




  return (
    <div className='row-span-3 bg-gray-500'>CardExpenseSummary</div>
  )
}

export default CardExpenseSummary