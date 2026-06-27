import InnerHeader from '../components/InnerHeader';

const getCampaigns = (base) => [
  {
    id: 1,
    image: `${base}assets/main_worship.jpg`,
    alt: 'Campaign worship',
    tag: 'Ministry',
    title: 'Fundraising results have reached',
    desc: 'Providing direct resource deployment to fund church outreach programs and remote mission teams.',
    goal: '£10,000',
    raised: '£5,000',
    width: '50%',
  },
  {
    id: 2,
    image: `${base}assets/volunteer_section.jpg`,
    alt: 'Campaign clean water',
    tag: 'Water',
    title: 'Providing access to safe water, sanitation',
    desc: 'Funding structural water filter projects, well drillings, and supply packages for dry season reliefs.',
    goal: '£8,000',
    raised: '£5,200',
    width: '65%',
  },
  {
    id: 3,
    image: `${base}assets/project_banner.jpg`,
    alt: 'Campaign healing help',
    tag: 'Health',
    title: 'Your Little Help Can Heal Their Helps',
    desc: 'Supplying local health checks, wellness guides, basic vitamins, and first-aid kits through the Balm Initiative.',
    goal: '£3,000',
    raised: '£900',
    width: '30%',
  },
  {
    id: 4,
    image: `${base}assets/volunteer_section.jpg`,
    alt: 'Campaign children rights',
    tag: 'Advocacy',
    title: 'Promoting The Rights of Children',
    desc: "Supporting protection efforts, children's nutrition blocks, and housing schemes for orphan support centers.",
    goal: '£12,000',
    raised: '£6,500',
    width: '54%',
  },
  {
    id: 5,
    image: `${base}assets/project_banner.jpg`,
    alt: 'Campaign Education',
    tag: 'Education',
    title: 'Give African Child A Good Education',
    desc: 'Distributing textbooks, pencils, school uniforms, and funding teacher salaries in partnering villages.',
    goal: '£15,000',
    raised: '£8,700',
    width: '58%',
  },
  {
    id: 6,
    image: `${base}assets/main_worship.jpg`,
    alt: 'Campaign Somalians happy',
    tag: 'Relief',
    title: 'Contribute Make For The Somalians happy',
    desc: 'Supporting regional dry-spell emergency packages, grains distribution, and safe shelter infrastructure.',
    goal: '£6,000',
    raised: '£2,100',
    width: '35%',
  },
];

const mockDonate = (campaignName) => {
  const amount = prompt(`Thank you for supporting "${campaignName}".\nEnter donation amount (£):`, '50');
  if (amount && !isNaN(amount)) {
    alert(`Thank you! Your donation of £${amount} has been processed successfully to support our ministry work.`);
  }
};

const Donation = () => {
  const campaigns = getCampaigns(import.meta.env.BASE_URL);

  return (
    <>
      <InnerHeader title="Campaigns" breadcrumb="Donation" />

      <section className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="campaign-grid">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="campaign-card">
                <div className="campaign-img">
                  <img src={campaign.image} alt={campaign.alt} loading="lazy" decoding="async" />
                  <span className="campaign-tag">{campaign.tag}</span>
                </div>
                <div className="campaign-info">
                  <h3 className="campaign-title"><a href="#">{campaign.title}</a></h3>
                  <p className="campaign-desc">{campaign.desc}</p>
                  <div className="campaign-progress">
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: campaign.width }} />
                    </div>
                    <div className="campaign-stats">
                      <div className="campaign-stat-item">Goal: <span>{campaign.goal}</span></div>
                      <div className="campaign-stat-item" style={{ textAlign: 'right' }}>Raised: <span>{campaign.raised}</span></div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary campaign-btn" onClick={() => mockDonate(campaign.title)}>
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Donation;
