export const HeaderActions = {
  queue: [
    {
      label: "Print Queue",
      type: "secondary",
    },
    {
      label: "Start Next Order",
      type: "primary",
    },
  ],
  progress: [
    {
      label: "Filter Station",
      type: "secondary",
    },
    {
      label: "Refresh Live View",
      type: "primary",
    },
  ],
  completed: [
    {
      label: "Export CSV",
      type: "secondary",
    },
    {
      label: "Print Shift Log",
      type: "primary",
    },
  ],
};

export const ProgressButtons = [
    {
        id: "all",
        label: "All In Progress"
    },
    {
        id: "delayed",
        label: "Delayed"
    },
    {
        id: "readySoon",
        label: "Ready Soon"
    },
    {
        id: "grillStation",
        label: "Grill Station"
    },
    {
        id: "drinks",
        label: "Drinks"
    },
    {
        id: "desserts",
        label: "Desserts"
    },
]

export const QueueButtons = [
    {
        id: "all",
        label: "All Orders"
    },
    {
        id: "new",
        label: "New"
    },
    {
        id: "priority",
        label: "Priority"
    },
    {
        id: "delayed",
        label: "Delayed"
    },
    {
        id: "tableOrder",
        label: "Table Order"
    },
    {
        id: "onlineOrder",
        label: "Online Order"
    },
    {
        id: "dineIn",
        label: "Dine-in"
    },
    {
        id: "takeaway",
        label: "Takeaway"
    },
]
