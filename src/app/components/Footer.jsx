// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <section className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-shades-black relative z-49"
        data-aos="fade-up"
                                  data-aos-duration="1000"
                                  data-aos-delay="400">
            <div className="max-w-7xl mx-auto w-full">
                <div className="mb-6 grid grid-cols-1 gap-10 sm:mb-16 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {/* Logo & Social Section */}
                    <div className="flex flex-col items-center gap-5 sm:mb-6 sm:items-start md:col-span-1 md:mb-0 lg:col-span-1 xl:col-span-2">
                        <Link href="/" passHref aria-current="page" className="logo default w-[87px] block">
                            <Image 
                            src={"/images/logo-white.svg"}  
                            width={100}
                            height={100}
                            alt="Logo" />
                        </Link>

                        <p className="font-sans text-[1.04rem] text-[#ffffff] font-[450]">
                            Automate without limits
                        </p>

                        <div className="flex w-full flex-row items-center justify-center gap-4 sm:justify-start">
                            <SocialIcon
                                href="https://twitter.com/n8n_io"
                                src={"/images/twitter_x_62a44e965e.svg"}
                                alt="Twitter"
                            />
                            <SocialIcon
                                href="https://github.com/n8n-io/n8n"
                                src={"/images/github_e1f217d7a3_b9a271324f.svg"}
                                alt="GitHub"
                            />
                            <SocialIcon
                                href="https://discord.gg/n8n"
                                src={"/images/discord_253947c90b_191e8f60fa.svg"}
                                alt="Discord"
                            />
                            <SocialIcon
                                href="https://www.linkedin.com/company/n8n/"
                                src={"/images/linkedin_d710e84d63_6ed0dc28aa.svg"}
                                alt="Linkedin"
                            />
                            <SocialIcon
                                href="https://www.youtube.com/c/n8n-io"
                                src={"/images/youtube_de4bdef50a_4b3a8b8aac.svg"}
                                alt="YouTube"
                            />
                        </div>
                    </div>

                    {/* Link Columns */}
                    <div className="flex flex-1 flex-col gap-x-4 gap-y-6 sm:flex-row sm:gap-y-0 md:col-span-2 lg:col-span-3 xl:col-span-3">
                        <LinkColumn links={[
                            { href: "/careers/", text: "Careers" },
                            { href: "/contact/", text: "Contact" },
                            { href: "https://merch.n8n.io", text: "Merch" },
                            { href: "/press/", text: "Press" },
                            { href: "/legal/#security", text: "Security" },
                        ]} />

                        <LinkColumn links={[
                            { href: "/case-studies/", text: "Case Studies" },
                            { href: "/vs/zapier/", text: "Zapier vs n8n" },
                            { href: "/vs/make/", text: "Make vs n8n" },
                            { href: "/tools/", text: "Tools" },
                            { href: "/reports/ai-agent-development-tools/", text: "AI agent report" },
                        ]} />

                        <LinkColumn links={[
                            { href: "/affiliates/", text: "Affiliate program" },
                            { href: "/expert-partners/", text: "Expert partners" },
                            { href: "https://internal.users.n8n.cloud/form/n8n-usability-test-signup", text: "Join user tests, get a gift" },
                            { href: "https://lu.ma/n8n-events", text: "Events" },
                        ]} />
                    </div>
                </div>

                {/* Integration Sections */}
                <div className="border-t border-t-gray-800 pt-11 hidden sm:block">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <IntegrationSection
                            title="Popular integrations"
                            items={[
                                { href: "/integrations/google-sheets/", text: "Google Sheets" },
                                { href: "/integrations/telegram/", text: "Telegram" },
                                { href: "/integrations/mysql/", text: "MySQL" },
                                { href: "/integrations/slack/", text: "Slack" },
                                { href: "/integrations/discord/", text: "Discord" },
                                { href: "/integrations/postgres/", text: "Postgres" },
                            ]}
                        />

                        <IntegrationSection
                            title="Trending combinations"
                            items={[
                                { href: "/integrations/hubspot/and/salesforce/", text: "HubSpot and Salesforce" },
                                { href: "/integrations/twilio/and/whatsapp-business-cloud/", text: "Twilio and WhatsApp" },
                                { href: "/integrations/github/and/jira-software/", text: "GitHub and Jira" },
                                { href: "/integrations/asana/and/slack/", text: "Asana and Slack" },
                                { href: "/integrations/asana/and/salesforce/", text: "Asana and Salesforce" },
                                { href: "/integrations/jira-software/and/slack/", text: "Jira and Slack" },
                            ]}
                        />

                        <IntegrationSection
                            title="Top integration categories"
                            items={[
                                { href: "/integrations/categories/communication/", text: "Communication" },
                                { href: "/integrations/categories/development/", text: "Development" },
                                { href: "/integrations/categories/cybersecurity/", text: "Cybersecurity" },
                                { href: "/integrations/categories/ai/", text: "AI" },
                                { href: "/integrations/categories/data-and-storage/", text: "Data & Storage" },
                                { href: "/integrations/categories/marketing/", text: "Marketing" },
                            ]}
                        />

                        <IntegrationSection
                            title="Trending templates"
                            items={[
                                { href: "/workflows/1750-creating-an-api-endpoint/", text: "Creating an API endpoint" },
                                { href: "/workflows/1954-ai-agent-chat/", text: "AI agent chat" },
                                { href: "/workflows/1951-scrape-and-summarize-webpages-with-ai/", text: "Scrape and summarize webpages with AI" },
                                { href: "/workflows/1747-joining-different-datasets/", text: "Joining different datasets" },
                                { href: "/workflows/1534-back-up-your-n8n-workflows-to-github/", text: "Back Up Your n8n Workflows To Github" },
                                { href: "/workflows/1700-very-quick-quickstart/", text: "Very quick quickstart" },
                            ]}
                        />

                        <IntegrationSection
                            title="Top guides"
                            items={[
                                { href: "https://blog.n8n.io/telegram-bots/", text: "Telegram bots" },
                                { href: "https://blog.n8n.io/open-source-chatbot/", text: "Open-source chatbot" },
                                { href: "https://blog.n8n.io/open-source-llm/", text: "Open-source LLM" },
                                { href: "https://blog.n8n.io/open-source-low-code-platforms/", text: "Open-source low-code platforms" },
                                { href: "https://blog.n8n.io/free-zapier-alternatives/", text: "Zapier alternatives" },
                                { href: "https://blog.n8n.io/make-vs-zapier/", text: "Make vs Zapier" },
                            ]}
                        />
                    </div>
                </div>

                {/* Bottom Legal Section */}
                <div className="flex flex-col items-center gap-6 border-t border-t-gray-800 py-6 text-center text-[1.04rem] -tracking-[.02em] font-[400] text-white sm:flex-row sm:items-start sm:justify-between sm:text-left md:py-12">
                    <div className="footer-bottom-links">
                        <div>
                            <p >
                                <Link href="/impressum/" className="">Imprint</Link> |
                                <Link href="/legal/" className=""> Legal</Link> |
                                <Link href="/legal/#privacy" className=""> Privacy</Link> |
                                <Link href="/legal/#vulnerability" className=""> Report a vulnerability</Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>© 2025 Constant Growth &nbsp; | &nbsp; All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Social Icon Component
const SocialIcon = ({ href, src, alt }) => (
    <Link 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex h-6 w-6 shrink-0"
    >
        <Image
            src={src}
            alt={alt}
            width={24}
            height={24}
            className="opacity-60 hover:opacity-100 transition-opacity"
        />
    </Link>
);

// Link Column Component
const LinkColumn = ({ links }) => (
    <div className="flex flex-1 flex-col gap-y-2">
        {links.map((link, index) => (
            <Link 
                key={index} 
                href={link.href} 
                className="text-center text-sm hover:text-white transition-colors sm:text-left lg:text-[1.05rem] font-[500] text-[#A29AB0]"
            >
                {link.text}
            </Link>
        ))}
    </div>
);

// Integration Section Component
const IntegrationSection = ({ title, items }) => (
    <div className="mb-12 flex flex-col gap-3 sm:pr-8 lg:pr-12">
        <div className="text-[1.03rem] -tracking-[.02em] text-white font-[500]">{title}</div>
        <ul className="flex flex-col gap-1">
            {items.map((item, index) => (
                <li key={index} className="truncate">
                    <Link 
                        href={item.href} 
                        className="text-[0.95rem] -tracking-[.02em] font-[500] text-[#b1afb3] opacity-65 hover:text-white transition-colors "
                    >
                        {item.text}
                    </Link>
                </li>
            ))}
        </ul>
        <div>
            <Link href="#" className="inline-block cursor-pointer border-b border-transparent -tracking-[.02em] text-[0.95rem] leading-[150%] text-gray-400 opacity-65 transition-colors hover:border-white hover:text-white">
                Show more
            </Link>
        </div>
    </div>
);

export default Footer;