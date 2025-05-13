"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface AmortizationEntry {
  year: number
  principalPayment: number
  interestPayment: number
  totalPayment: number
  remainingBalance: number
  totalInterestToDate: number
}

interface AmortizationTableProps {
  schedule: AmortizationEntry[]
}

export function AmortizationTable({ schedule }: AmortizationTableProps) {
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="velocity-card">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Year</TableHead>
              <TableHead>Principal Payment</TableHead>
              <TableHead>Interest Payment</TableHead>
              <TableHead>Total Payment</TableHead>
              <TableHead>Remaining Balance</TableHead>
              <TableHead>Total Interest Paid</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((entry) => (
              <TableRow key={entry.year}>
                <TableCell>{entry.year}</TableCell>
                <TableCell>{formatCurrency(entry.principalPayment)}</TableCell>
                <TableCell>{formatCurrency(entry.interestPayment)}</TableCell>
                <TableCell>{formatCurrency(entry.totalPayment)}</TableCell>
                <TableCell>{formatCurrency(entry.remainingBalance)}</TableCell>
                <TableCell>{formatCurrency(entry.totalInterestToDate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
