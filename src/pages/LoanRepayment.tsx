// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
// import { Input } from "../components/ui/input";
// import  Button  from "../components/ui/Button";
// import { useToast } from "../hooks/use-toast";
// import { 
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../components/ui/table";
// import { Skeleton } from "../components/ui/skeleton";

// interface LoanRepayment {
//   id: string;
//   amount: number;
//   rate: number;
//   duration: number;
//   paid: number;
//   nextPayment: string;
//   status: string;
//   totalPayments: number;
//   paidPayments: number;
//   delayedPayments: number;
// }

// export default function LoanRepayments() {
//   const [loanId, setLoanId] = useState("");
//   const { toast } = useToast();

//   // Mock data based on the example image
//   const mockRepayment: LoanRepayment = {
//     id: "E4C9077F",
//     amount: 16.37,
//     rate: 48,
//     duration: 180,
//     paid: 24177.03,
//     nextPayment: "####",
//     status: "Active",
//     totalPayments: 48,
//     paidPayments: 24,
//     delayedPayments: 0
//   };

//   const { data: repayment, isLoading } = useQuery<LoanRepayment>({
//     queryKey: [`/api/loans/${loanId}/repayments`],
//     enabled: !!loanId
//   });

//   const handleSearch = () => {
//     if (!loanId) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: "Please enter a loan ID"
//       });
//       return;
//     }
//     // The query will automatically refetch when loanId changes
//   };

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8">Loan Repayments</h1>

//       <Card className="mb-8">
//         <CardContent className="pt-6">
//           <div className="flex gap-4">
//             <Input 
//               placeholder="Enter Loan ID" 
//               value={loanId}
//               onChange={(e) => setLoanId(e.target.value)}
//               className="max-w-xs"
//             />
//             <Button onClick={handleSearch}>Search</Button>
//           </div>
//         </CardContent>
//       </Card>

//       {isLoading ? (
//         <Card>
//           <CardContent className="pt-6">
//             <Skeleton className="h-[200px] w-full" />
//           </CardContent>
//         </Card>
//       ) : repayment ? (
//         <div className="space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>Loan Details</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div>
//                   <p className="text-sm text-gray-500">Loan ID</p>
//                   <p className="font-medium">{repayment.id}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Amount</p>
//                   <p className="font-medium">${repayment.amount}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Interest Rate</p>
//                   <p className="font-medium">{repayment.rate}%</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Duration</p>
//                   <p className="font-medium">{repayment.duration} months</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Payment Status</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="overflow-x-auto">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Total Amount</TableHead>
//                       <TableHead>Amount Paid</TableHead>
//                       <TableHead>Next Payment</TableHead>
//                       <TableHead>Status</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>${repayment.amount.toLocaleString()}</TableCell>
//                       <TableCell>${repayment.paid.toLocaleString()}</TableCell>
//                       <TableCell>{repayment.nextPayment}</TableCell>
//                       <TableCell>
//                         <span className="text-green-600">{repayment.status}</span>
//                       </TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Payment History</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <p className="text-sm text-blue-600">Total Payments</p>
//                   <p className="text-2xl font-bold">{repayment.totalPayments}</p>
//                 </div>
//                 <div className="bg-green-50 p-4 rounded-lg">
//                   <p className="text-sm text-green-600">Paid</p>
//                   <p className="text-2xl font-bold">{repayment.paidPayments}</p>
//                 </div>
//                 <div className="bg-red-50 p-4 rounded-lg">
//                   <p className="text-sm text-red-600">Delayed</p>
//                   <p className="text-2xl font-bold">{repayment.delayedPayments}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       ) : null}
//     </div>
//   );
// }




import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Input } from "../components/ui/input";
import Button from "../components/ui/Button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

interface LoanRepayment {
  id: string;
  amount: number;
  rate: number;
  duration: number;
  paid: number;
  nextPayment: string;
  status: string;
  totalPayments: number;
  paidPayments: number;
  delayedPayments: number;
}

export default function LoanRepayments() {
  const [loanId, setLoanId] = useState("");

  // Static Loan Data
  const staticRepayment: LoanRepayment = {
    id: "143    ",
    amount: 50000,
    rate: 5.5,
    duration: 24,
    paid: 20000,
    nextPayment: "March 15, 2025",
    status: "Active",
    totalPayments: 24,
    paidPayments: 12,
    delayedPayments: 2
  };

  // Data for Pie Chart
  const pieData = [
    { name: "Paid", value: staticRepayment.paid },
    { name: "Remaining", value: staticRepayment.amount - staticRepayment.paid },
  ];

  const COLORS = ["#4CAF50", "#F44336"];

  // Data for Line Chart (Mock Payment History)
  const paymentHistory = [
    { month: "Jan", paid: 2000, delayed: 0 },
    { month: "Feb", paid: 2000, delayed: 1 },
    { month: "Mar", paid: 2000, delayed: 0 },
    { month: "Apr", paid: 2000, delayed: 1 },
    { month: "May", paid: 2000, delayed: 0 },
    { month: "Jun", paid: 2000, delayed: 0 },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Loan Repayments</h1>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Input 
              placeholder="Enter Loan ID" 
              value={loanId}
              onChange={(e) => setLoanId(e.target.value)}
              className="max-w-xs"
            />
            <Button onClick={() => {}}>Search</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Loan Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-500">Loan ID</p>
                <p className="font-medium">{staticRepayment.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium">${staticRepayment.amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Interest Rate</p>
                <p className="font-medium">{staticRepayment.rate}%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium">{staticRepayment.duration} months</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Total Amount</TableHead>
                    <TableHead>Amount Paid</TableHead>
                    <TableHead>Next Payment</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>${staticRepayment.amount.toLocaleString()}</TableCell>
                    <TableCell>${staticRepayment.paid.toLocaleString()}</TableCell>
                    <TableCell>{staticRepayment.nextPayment}</TableCell>
                    <TableCell>
                      <span className="text-green-600">{staticRepayment.status}</span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart for Loan Payment Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Loan Payment Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <PieChart width={400} height={300}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </CardContent>
        </Card>

        {/* Line Chart for Payment History */}
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <LineChart width={500} height={300} data={paymentHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="paid" stroke="#4CAF50" strokeWidth={2} />
              <Line type="monotone" dataKey="delayed" stroke="#F44336" strokeWidth={2} />
            </LineChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
