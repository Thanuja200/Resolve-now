import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "pending" | "in-progress" | "resolved" | "closed";
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const statusConfig = {
    pending: {
      label: "Pending",
      className: "bg-status-pending text-white",
    },
    "in-progress": {
      label: "In Progress",
      className: "bg-status-in-progress text-white",
    },
    resolved: {
      label: "Resolved",
      className: "bg-status-resolved text-white",
    },
    closed: {
      label: "Closed",
      className: "bg-status-closed text-white",
    },
  };

  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;