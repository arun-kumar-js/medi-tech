# MediQARA Tech - Professional Website

A modern, professional website for MediQARA Tech, a medical device quality assurance and regulatory affairs consulting firm.

## 🏷 About MediQARA Tech

MediQARA Tech is a professional consulting firm specializing in Medical Device Quality Assurance and Regulatory Affairs. With over 17 years of hands-on experience, we help medical device and healthcare companies achieve seamless Quality Assurance (QA) and Regulatory Affairs (RA) compliance.

## 🚀 Features

- **Professional Design**: Modern, responsive design with gradient backgrounds and professional styling
- **Comprehensive Content**: Complete information about services, company details, and contact information
- **Interactive Elements**: Hover effects, smooth transitions, and engaging user experience
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Proper meta tags and structured content

## 📋 Website Sections

1. **Hero Section**: Company tagline, intro paragraph, and key highlights
2. **About Us**: Mission, vision, core values, and founder information
3. **Services**: Comprehensive service offerings in 4 categories:
   - Quality Assurance (QA) Services
   - Regulatory Affairs (RA) Services
   - Training & Capacity Building
   - Advisory & Support Services
4. **Industries Served**: Medical device manufacturers, diagnostic equipment makers, pharmaceutical packaging, distributors, and start-ups
5. **Why Choose Us**: Key advantages and testimonials
6. **Contact**: Contact form and detailed contact information
7. **Footer**: Company information, quick links, and legal details

## 🛠 Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Responsive Design**: Mobile-first approach

## 📱 Contact Information

- **Phone**: +91 8122590434
- **Email**: info@mediqaratech.com
- **Address**: 4/198 E, Pattumuthuiyyanarkovil Street, Arunachalapuram, Tenkasi – 627862, Tamilnadu, India
- **Business Hours**: Mon – Sat: 9:00 AM – 6:00 PM IST (Sunday: Closed)
- **LinkedIn**: [Selvaraj Kumar](https://www.linkedin.com/in/selvaraj-kumar/)

## 🏢 Company Details

- **GSTIN**: 33BRNPS7024K1ZC
- **MSME/Udyam No.**: UDYAM-TN-37-0044679

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mediqaratech-vite-full
```

2. Install dependencies:

```bash
npm install
```

3. Configure EmailJS (see EmailJS Setup section below)

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📧 EmailJS Setup

The contact form uses EmailJS to send emails to info@mediqaratech.com. Follow these steps to set it up:

### 1. Create EmailJS Account

- Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
- Verify your email address

### 2. Add Email Service

- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose "Gmail" or "Outlook" (or your preferred email provider)
- Connect your email account (info@mediqaratech.com)

### 3. Create Email Template

- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```html
Subject: New Contact Form Submission from {{from_name}} Name: {{from_name}}
Email: {{from_email}} Phone: {{from_phone}} Message: {{message}} This email was
sent from the MediQARA Tech website contact form.
```

### 4. Get Your Credentials

- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section
- **Public Key**: Found in Account > API Keys section

### 5. Update Contact Component

Replace the placeholder values in `src/components/Contact.jsx`:

- `YOUR_SERVICE_ID` with your actual Service ID
- `YOUR_TEMPLATE_ID` with your actual Template ID
- `YOUR_PUBLIC_KEY` with your actual Public Key

### 6. Test the Form

- Fill out the contact form
- Submit and check if email is received at info@mediqaratech.com

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with tagline and highlights
│   ├── About.jsx         # About us section with mission, vision, values
│   ├── Services.jsx      # Services offered in 4 categories
│   ├── Industries.jsx   # Industries served
│   ├── WhyChoose.jsx    # Why choose us section
│   ├── Contact.jsx      # Contact form and information
│   └── Footer.jsx       # Footer with company info and links
├── App.jsx              # Main app component
├── main.jsx            # Entry point
└── styles.css          # Global styles and custom CSS
```

## 🎨 Design Features

- **Color Scheme**: Professional blue and cyan gradients
- **Typography**: Inter font family for modern readability
- **Icons**: Lucide React icons for consistency
- **Animations**: Smooth transitions and hover effects
- **Layout**: Clean, organized sections with proper spacing

## 📞 Support

For any questions or support regarding the website, please contact:

- **Email**: info@mediqaratech.com
- **Phone**: +91 8122590434

## 📄 License

© 2025 MediQARA Tech. All Rights Reserved.

---

Built with ❤️ for MediQARA Tech - Your Trusted Partner in Medical Device Quality & Regulatory Excellence.
