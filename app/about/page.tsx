export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #059669, #10b981)', padding: '4rem 2rem', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Dr. Krushna</h1>
        <p style={{ fontSize: '1.25rem' }}>4+ Years of Excellence in Homeopathy</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
        {/* Doctor Profile */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', marginBottom: '4rem' }}>
          <div>
            <img 
              src=""
              style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '0.5rem' }}>Dr. Krushna D.Thorat </h2>
            <p style={{ fontSize: '1.125rem', color: '#059669', fontWeight: '600', marginBottom: '1rem' }}>BHMS(Homeopathy)</p>
            <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '2rem' }}>
              Welcome to Aarogyam Homoeopathy. I am Dr. Krushna  Thorat (BHMS, Reg No. 76489), a distinguished homeopathy practitioner with over 4+ years of dedicated clinical experience. 
              I completed  Bachelor of Homeopathic Medicine and Surgery (BHMS) from the prestigious 
              National Homeopathic Medical College 
            </p>
            <div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', background: '#f9fafb', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.5rem' }}></span>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#1f2937', marginBottom: '0.25rem' }}>Certificate-Child Health Pediatric</h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Institution Of Health Science,Mumbai - 2021</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', background: '#f9fafb', borderRadius: '0.5rem' }}>
                <span style={{ fontSize: '2rem' }}> </span>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#1f2937', marginBottom: '0.25rem' }}> </h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>4+ Research Papers in Homeopathy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{ background: '#059669', padding: '3rem', borderRadius: '1rem', marginBottom: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>4+</div>
              <div style={{ color: 'rgba(255,255,255,0.9)' }}>Years Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>10K+</div>
              <div style={{ color: 'rgba(255,255,255,0.9)' }}>Happy Patients</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>100+</div>
              <div style={{ color: 'rgba(255,255,255,0.9)' }}>Cities Served</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>95%</div>
              <div style={{ color: 'rgba(255,255,255,0.9)' }}>Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}