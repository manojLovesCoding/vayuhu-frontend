/**
 * Utility to export visitor data to CSV format
 * @param {Array} data - The array of visitor objects
 */
export const exportVisitorsToCSV = (data) => {
  if (!data || data.length === 0) {
    alert("No data available to export.");
    return;
  }

  // 1. Define CSV Headers
  const headers = [
    "S.No",
    "Visitor Name",
    "Contact",
    "Email",
    "Company",
    "Date",
    "Check-In",
    "Check-Out",
    "Attendees",
    "Amount Paid",
    "Reason",
    "Added By"
  ];

  // 2. Map data to rows and handle potential commas in text fields
  const rows = data.map((v, i) => [
    i + 1,
    `"${v.name || ""}"`,
    `"${v.contact || ""}"`,
    `"${v.email || "N/A"}"`,
    `"${v.company_name || "N/A"}"`,
    v.visiting_date,
    v.check_in_time || "-",
    v.check_out_time || "-",
    v.attendees || 1,
    v.amount_paid || 0,
    `"${(v.reason || "N/A").replace(/"/g, '""')}"`, // Escape quotes for CSV safety
    `"${v.user_name || "Admin"}"`
  ]);

  // 3. Combine headers and rows
  const csvContent = [
    headers.join(","), 
    ...rows.map(row => row.join(","))
  ].join("\n");

  // 4. Create and trigger download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  
  const fileName = `Vayuhu_Visitors_${new Date().toISOString().split('T')[0]}.csv`;
  
  link.setAttribute("href", url);
  link.setAttribute("download", fileName);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};