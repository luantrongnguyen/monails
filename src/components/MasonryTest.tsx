import React from 'react';

const MasonryTest: React.FC = () => {
  return (
    <div style={{ padding: '20px', background: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
        Masonry Layout Test - Amado Template
      </h1>
      
      <div style={{ 
        position: 'relative',
        width: '100%',
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          Layout này sử dụng JavaScript để tính toán vị trí các items và tạo masonry effect giống template gốc.
          Các items sẽ được sắp xếp để lấp đầy không gian một cách tối ưu, không có khoảng trống lớn.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '20px',
          marginBottom: '20px'
        }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              height: item % 2 === 0 ? '300px' : '400px' // Varying heights to test masonry
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
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block' 
                }}
              />
              <div style={{
                position: 'absolute',
                top: '40px',
                left: '40px',
                zIndex: 10
              }}>
                <div style={{
                  width: '80px',
                  height: '3px',
                  backgroundColor: '#fbb710',
                  marginBottom: '15px'
                }}></div>
                <p style={{ 
                  margin: '0 0 5px 0', 
                  fontSize: '16px', 
                  color: '#6d6d6d',
                  lineHeight: 1
                }}>
                  From $180
                </p>
                <h4 style={{ 
                  margin: 0, 
                  fontSize: '18px', 
                  fontWeight: '600',
                  color: '#242424'
                }}>
                  Category {item}
                </h4>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Masonry layout sẽ tự động điều chỉnh vị trí các items để tối ưu không gian
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasonryTest;
