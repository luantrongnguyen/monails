import React from 'react';

const TestLayout: React.FC = () => {
  return (
    <div style={{ padding: '20px', background: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
        Amado Furniture - React TypeScript
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px',
        padding: '0 15px'
      }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div key={item} style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
          }}>
            <img 
              src={`/img/bg-img/${item}.jpg`} 
              alt={`Category ${item}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              padding: '20px',
              transform: 'translateY(100%)',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(100%)';
            }}>
              <div style={{
                width: '50px',
                height: '2px',
                backgroundColor: '#fbb710',
                marginBottom: '10px'
              }}></div>
              <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#fbb710' }}>
                From $180
              </p>
              <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>
                Category {item}
              </h4>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p style={{ color: '#666', fontSize: '14px' }}>
          Layout đã được cập nhật với CSS Grid để tạo masonry effect như template gốc
        </p>
      </div>
    </div>
  );
};

export default TestLayout;
