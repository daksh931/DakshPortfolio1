import recotech from "../assets/img/ProjectRecotech/Login.png";
import MusicSchool from "../assets/img/ProjectMusicSchool/Home.png";
import signoracucina from "../assets/img/ProjectSignoracucina/Home.png";
import design from "../assets/img/design.png";

import image1 from "../assets/Recotech_Screenshots/1.png";
import image2 from "../assets/Recotech_Screenshots/2.png";
import image3 from "../assets/Recotech_Screenshots/3.png";
import image4 from "../assets/Recotech_Screenshots/4.png";
import image5 from "../assets/Recotech_Screenshots/5.png";
import image6 from "../assets/Recotech_Screenshots/6.png";



import sig_image1 from "../assets/signorvino_wineSite/1.png";
import sig_image2 from "../assets/signorvino_wineSite/2.png";
import sig_image3 from "../assets/signorvino_wineSite/3.png";
import sig_image4 from "../assets/signorvino_wineSite/4.png";
import sig_image5 from "../assets/signorvino_wineSite/5.png";

import vis_image1 from "../assets/Vision_Website/1.png";
import vis_image2 from "../assets/Vision_Website/2.png";
import vis_image3 from "../assets/Vision_Website/3.png";
import vis_image4 from "../assets/Vision_Website/4.png";
const projectData = {
    recotech: [{
        title: "Recotech",
        description: "Recotech is a multi-role management system designed to streamline operations across different user roles, including SUPER_ADMIN, ADMIN, OPERATOR, RECEPTION, STORAGE, PARTS, and SALES. Admins can add and manage users, assigning specific roles with restricted access to the dashboard and operations based on their responsibilities. Operators can check inventory availability for tools, while receptionists can generate total bill amounts seamlessly. The platform ensures efficient workflow management by providing role-based access control, enhancing operational transparency and efficiency.",
        image: recotech,
    },
    {
        title: "Role-Based Project Dashboard",
        description:
            "Recotech features a Project Dashboard with role-based access control, ensuring that only authorized users can interact with project data. While some roles have full access to add, edit, or delete projects, others are restricted to view-only mode. Additionally, access to project details varies—certain users can see comprehensive project insights, while others have limited visibility. Clicking on a project in the dashboard redirects users to a detailed view, displaying team members involved, project progress, and financial aspects like expenses, providing a structured and efficient project management experience.",
        image: image1,
    },
    {
        title: "Secure Statement Tracking",
        description:
            "Recotech also includes a Statement Page, accessible only to specific roles based on permissions. This feature allows users to track statements, including assigned operators, deadlines, and completion status. Some roles have the ability to modify or delete statements, while others are limited to view-only access. This ensures controlled management of critical data, enabling seamless tracking of deadlines and task responsibilities while maintaining role-based security and operational efficiency.",
        image: image2,
    },
    {
        title: "User Management System",
        description:
            "Recotech also provides a User Management System, where only authorized roles, such as Super Admin, can create and manage users. While adding a new user, details like assigned projects, email, and role (e.g., Operator, Reception, Storage, etc.) are specified. Some roles can modify or remove users, while others have view-only access. This structured approach ensures that user assignments and roles are managed efficiently, maintaining a clear hierarchy and controlled access within the system.",
        image: image3,
    },
    {
        title: "Parts Management & Inventory",
        description:
            "Recotech also features a Parts Management System, where users with the appropriate roles can view, manage, and order spare parts for repairs and maintenance. The Parts Page displays essential details such as Part Code, Name, Quantity, Brand/Model, Fuel Type, Power (KW), Engine Code, Chassis, and Location (e.g., Warehouse). Based on availability, parts can be ordered and used for servicing and repairs, ensuring smooth inventory tracking and efficient resource management.",
        image: image4,
    },
    {
        title: "Document Management & Organization",
        description:
            "Recotech also features a Document Management System, allowing users to upload, manage, and organize documents based on specific projects and clients. Users with the appropriate permissions can select templates, associate documents with projects, and assign them to clients. Some roles have the ability to modify or delete documents, while others are limited to view-only access. This ensures secure and efficient document storage, making it easier to track and manage important files within the platform.",
        image: image5,
    },
    {
        title: "Signup/Login Auth",
        description:
            "In Recotech, login and authentication are handled efficiently on the frontend, ensuring a smooth and secure user experience. The system dynamically verifies user credentials and restricts access based on role-based permissions. The UI adapts in real-time, showing only the relevant sections and functionalities for each user. Unauthorized users are automatically redirected, enhancing security and usability while maintaining a seamless workflow across different roles.",
        image: image6,
    },


    // Add below details also.
//     Recotech implements Role-Based Access Control (RBAC) across all features and the dashboard, ensuring a highly secure and structured user experience. Each role—Super Admin, Admin, Operator, Reception, Storage, Parts, Sales—has granular access permissions.

// Some users have full control (create, update, delete), while others have limited permissions (view-only or add-only).
// The dashboard dynamically adapts based on the user’s role, restricting access to unauthorized sections.
// Features like Projects, Statements, Inventory, and Documents are all role-gated, ensuring users only see and modify what they are authorized to.
// This structured RBAC implementation enhances security, prevents unauthorized actions, and streamlines operations within Recotech.








    
    ],



    signoracucina: [{
        title: "Signora Cucina - A Premium Food Delivery Experience",
        description:
            "Signora Cucina is a modern and seamless food delivery application designed to bring delicious meals straight to your doorstep. Developed by our team using React.js, Node.js, and other cutting-edge technologies, this platform ensures a smooth and intuitive user experience.With a focus on efficiency",
        image: signoracucina,
    },
    {
        title: "Seamless Multi-Language Support",
        description:
            "Signora Cucina features robust multi-language support, ensuring that users who speak only their native language can navigate the platform effortlessly. Implemented using React i18next, this functionality provides seamless localization and enhances accessibility for a diverse user base.",
        image: sig_image1,
    },
    {
        title: "Best-Selling Items Showcase",
        description:
            "App features a simplified user interface where best-selling items are prominently displayed on the homepage. This allows users to quickly browse and select popular dishes without navigating through the entire menu. The best-selling section includes high-quality images, prices, and quick add-to-cart options, enhancing user convenience and boosting sales. This feature ensures that users can effortlessly explore top-rated meals, making their food ordering experience smooth and enjoyable.",
        image: sig_image2,
    },
    {
        title: "User-Friendly Contact & Feedback System",
        description:
            "The Signora Cucina application includes a user-friendly contact and feedback section, allowing customers to easily get in touch with the restaurant. The interface offers a clean layout with fields for name, email, and message submission. A clear privacy assurance is also provided, ensuring that users' personal information is kept safe. This feature enhances customer interaction and support, making it convenient for users to share their feedback, ask questions, or make special requests directly through the app.",
        image: sig_image3,
    },
    {
        title: "Effortless Add-to-Cart & Checkout",
        description:
            "implements a seamless, stateless 'Add to Cart' functionality. Users can effortlessly add items to their cart, view the cart contents in real-time, and proceed to checkout without any page reloads, enhancing the user experience significantly. This feature ensures that customers can quickly browse popular dishes, add them to their cart, and move towards payment smoothly, making the ordering process intuitive and efficient.",
        image: sig_image4,
    },
    {
        title: "Secure Authentication & Social Login",
        description:
            "We integrated a secure login and signup system, including authentication options via Google and other social platforms. This ensures quick and hassle-free access for users, enhancing the overall usability and convenience of the application.",
        image: sig_image5,
    },
    ],



    // vision classes 
    visionClasses :[
        {
            "title": "Vision Classes - Empowering Students for a Brighter Future",
            "description": "Vision Classes is a comprehensive online learning platform designed to help students excel in School Education, Engineering (B.Tech), and Government Job Preparation. With a user-friendly interface and advanced technology stack, Vision Classes ensures a seamless and effective learning experience.",
            "image": vis_image1
        },
        {
            "title": "Secure Authentication & Role-Based Access",
            "description": "Vision Classes offers a secure login and signup system, allowing users to register natively using Express and React or through Auth0 with Google, GitHub, and other social authentication providers. This ensures a flexible and hassle-free login experience.",
            "image": vis_image2
        },
        {
            "title": "Seamless Redux Integration for State Management",
            "description": "The platform is built with seamless Redux integration, ensuring efficient state management across different components. This enables smooth navigation, real-time updates, and enhanced performance, providing users with a seamless experience.",
            "image":vis_image3
        },
        {
            "title": "Effortless Add-to-Cart & Checkout",
            "description": "Users can easily browse through available courses, add them to their cart, and proceed to checkout without any page reloads. The intuitive interface ensures a hassle-free experience while selecting and purchasing courses.",
            "image": vis_image3
        },
        {
            "title": "Admin Dashboard for Course Management",
            "description": "Vision Classes provides an admin dashboard where authorized users can post, delete, and update courses. This ensures efficient course management, keeping the content up-to-date and relevant for students.",
            "image": vis_image4
        },
        {
            "title": "Browse & Purchase Courses with Ease",
            "description": "Students can explore a wide range of courses tailored to their needs, view course details, and purchase them effortlessly. The platform ensures a structured learning experience with easy accessibility to all available courses.",
            "image": vis_image2
        }
    ],
    


    musicschool: [{
        title: "Music School",
        description: "This is the Music School project description...",
        image: MusicSchool,
    },
    ],

    
    slabpro: [{
        title: "Slab Pro",
        description: "This is the Slab Pro project description...",
        image: design,
    },
    ],
};

export default projectData;