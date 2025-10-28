import icon_cpu from "../../assets/icons/icon_cpu.svg";
import icon_ip from "../../assets/icons/icon_ip.svg";
import icon_backup from "../../assets/icons/icon_backup.svg";

export const stepsData = [
    [
        "System",

    ],
    [
        "Additional<br/>Ressources",
        {
            icon: icon_cpu,
            title: "Extra CPU Core",
            name: "cpu",
            type: "radio",
            options: [
                {
                    name: "No extra<br/>GPU Core",
                    price: 0
                },
                {
                    name: "<span>1 X Extra</span><br/>GPU core",
                    price: 5
                },
                {
                    name: "<span>2 X Extra</span><br/>GPU core",
                    price: 10
                },
                {
                    name: "<span>3 X Extra</span><br/>GPU core",
                    price: 20
                },
                {
                    name: "<span>4 X Extra</span><br/>GPU core",
                    price: 40
                }
            ]
        },
        {
            icon: icon_ip,
            title: "Additional IPs",
            name: "ip",
            type: "radio",
            options: [
                {
                    name: "No<br/>Additional IP",
                    price: 0
                },
                {
                    name: "<span>+1</span> Ipv4",
                    price: 5
                },
                {
                    name: "<span>+2</span> Ipv4",
                    price: 10
                },
                {
                    name: "<span>+3</span> Ipv4",
                    price: 20
                },
                {
                    name: "<span>+4</span> Ipv4",
                    price: 40
                },
                {
                    name: "<span>+5</span> Ipv4",
                    price: 50
                }
            ]
        },
        {
            icon: icon_cpu,
            title: "Extra CPU Core",
            name: "cpu",
            type: "radio",
            options: [
                {
                    name: "No extra<br/>GPU Core",
                    price: 0
                },
                {
                    name: "<span>1 X Extra</span><br/>GPU core",
                    price: 5
                },
                {
                    name: "<span>2 X Extra</span><br/>GPU core",
                    price: 10
                },
                {
                    name: "<span>3 X Extra</span><br/>GPU core",
                    price: 20
                },
                {
                    name: "<span>4 X Extra</span><br/>GPU core",
                    price: 40
                }
            ]
        },
        {
            icon: icon_ip,
            title: "Additional IPs",
            name: "ip",
            type: "radio",
            options: [
                {
                    name: "No<br/>Additional IP",
                    price: 0
                },
                {
                    name: "<span>+1</span> Ipv4",
                    price: 5
                },
                {
                    name: "<span>+2</span> Ipv4",
                    price: 10
                },
                {
                    name: "<span>+3</span> Ipv4",
                    price: 20
                },
                {
                    name: "<span>+4</span> Ipv4",
                    price: 40
                },
                {
                    name: "<span>+5</span> Ipv4",
                    price: 50
                }
            ]
        },

    ],
    [
        "Backup &<br/>Management",

        {
            icon: icon_backup,
            title: "Additional IPs",
            name: "extra_gb",
            type: "range",
            options: [
                {
                    name: "No extra<br/>GB Memory",
                    price: 0
                },
                {
                    name: "<span>+5</span><br/>GB SSD",
                    price: 5
                },
                {
                    name: "<span>+10</span><br/>GB SSD",
                    price: 10
                },
                {
                    name: "<span>+20</span><br/>GB SSD",
                    price: 20
                },
                {
                    name: "<span>+50</span><br/>GB SSD",
                    price: 40
                }
            ]
        },
        {
            icon: icon_backup,
            title: "Automatic Backups",
            name: "automatic_backups",
            type: "range",
            options: [
                {
                    name: "No Backups",
                    price: 0
                },
                {
                    name: "3 Days Retention",
                    price: 5
                },
                {
                    name: "6 Days Retention",
                    price: 10
                },
                {
                    name: "10 Days Retention",
                    price: 20
                }
            ]
        },{
        icon: icon_backup,
        title: "Automatic Backups",
        name: "automatic_backups_2",
        type: "range",
        options: [
            {
                name: "No Backups",
                price: 0
            },
            {
                name: "3 Days Retention",
                price: 5
            },
            {
                name: "6 Days Retention",
                price: 10
            },
            {
                name: "10 Days Retention",
                price: 20
            }
        ]
    },
        {
            icon: icon_backup,
            title: "DDoS Protection",
            name: "ddos_protection",
            type: "radio",
            options: [
                {
                    name: "No Backups",
                    price: 0
                },
                {
                    name: "3 Days Retention",
                    price: 5
                }
            ]
        },
        {
            icon: icon_backup,
            title: "Automatic Backups",
            name: "automatic_backups_3",
            type: "checkbox",
        },
    ],
    [
        "Checkout"
    ]
]
