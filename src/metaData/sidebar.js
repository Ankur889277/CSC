export const sidebarMeta = [
  {
    label: "Dashboard",
    slug: "dashboard",
    id: 1,
    image: "/assets/DashboardIcons/dashboard.svg",
  },
  {
    label: "Sample Management",
    slug: "sample-management",
    id: 4,
    subMenu: [
      {
        label: "Registration Form",
        slug: "registration-form",
        url: "/sample-management/RegistrationForm",
      },
      {
        label: "View SampleList",
        slug: "view-sampleList",
        url: "/sample-management/ViewSampleList",
      },
      {
        label: "Schedule Sampling",
        slug: "schedule-sampling",
        url: "/sample-management/ScheduleSampling",
      },
    ],
  },
  {
    label: "Customer Management",
    slug: "customer-management",
    id: 5,
    subMenu: [
      {
        label: "Add Customer",
        slug: "add-customer",
        url: "/customer-management/Addcustomer",
      },
      {
        label: "Customer List",
        slug: "customer-list",
        url: "/customer-management/CustomerList",
      },
      {
        label: "Customer Detail",
        slug: "customer-detail",
        url: "/customer-management/CustomerDetail",
      },
    ],
  },
];
