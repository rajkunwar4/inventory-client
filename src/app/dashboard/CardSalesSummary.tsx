import { useGetDashboardMetricsQuery } from '@/state/api';
import React from 'react'


const CardSalesSummary = () => {

    const { data: dashboardMetrics, isLoading, isError } = useGetDashboardMetricsQuery();


  return (
    <div className='row-span-3 xl:row-span-6 bg-gray-500'>

    </div>
  )
}

export default CardSalesSummary