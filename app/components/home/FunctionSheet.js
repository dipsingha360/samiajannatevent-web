// A banquet function sheet, the order a hotel issues for each event.
// Sample figures only; it shows what a booking with us covers.

const details = [
  { label: "Venue", value: "Hotel ballroom" },
  { label: "Covers", value: "320" },
  { label: "Service", value: "Plated dinner" },
];

const staff = [
  { role: "Captains", count: 4, call: "17:30" },
  { role: "Waiters", count: 24, call: "18:00" },
  { role: "Commis", count: 8, call: "18:00" },
  { role: "Bartender helpers", count: 4, call: "18:15" },
  { role: "Hosts", count: 3, call: "18:30" },
];

const runOfShow = [
  { time: "19:00", item: "Guests arrive, welcome drinks" },
  { time: "19:45", item: "First course" },
  { time: "21:30", item: "Dessert and coffee" },
];

const totalStaff = staff.reduce((sum, row) => sum + row.count, 0);

function FunctionSheet() {
  return (
    <figure className="rounded-2xl border border-fg/8 bg-card shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]">
      <figcaption className="flex items-baseline justify-between border-b border-fg/8 px-6 py-5">
        <span>
          <span className="block font-display font-medium text-2xl text-fg">
            Gala dinner
          </span>
          <span className="mt-1 block text-sm text-fg-2">
            Function sheet · Saturday
          </span>
        </span>
        <span className="text-xs text-fg-3">Sample</span>
      </figcaption>

      <dl className="grid grid-cols-3 gap-4 border-b border-fg/8 px-6 py-5">
        {details.map((detail) => (
          <div key={detail.label}>
            <dt className="text-xs text-fg-3">{detail.label}</dt>
            <dd className="mt-1 text-sm text-fg tabular-nums">
              {detail.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border-b border-fg/8 px-6 py-5">
        <div className="flex items-baseline justify-between">
          <p className="text-sm text-fg-2">Service staff</p>
          <p className="text-sm text-accent tabular-nums">
            {totalStaff} people
          </p>
        </div>
        <table className="mt-3 w-full text-sm">
          <thead className="sr-only">
            <tr>
              <th>Role</th>
              <th>People</th>
              <th>Call time</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((row) => (
              <tr key={row.role} className="h-9 border-t border-fg/8">
                <td className="text-fg">{row.role}</td>
                <td className="text-right text-fg tabular-nums">
                  {row.count}
                </td>
                <td className="w-20 text-right text-fg-3 tabular-nums">
                  {row.call}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ol className="space-y-2 px-6 py-5">
        {runOfShow.map((step) => (
          <li key={step.time} className="flex gap-4 text-sm">
            <span className="w-12 shrink-0 text-fg-3 tabular-nums">
              {step.time}
            </span>
            <span className="text-fg-2">{step.item}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default FunctionSheet;
