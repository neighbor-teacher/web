import { useState, useEffect } from 'react';
import { Check, ClipboardList, Send } from 'lucide-react';

export default function ApplySection({ selectedClass, setSelectedClass }) {
  const [formData, setFormData] = useState({
    className: '',
    name: '',
    phone: '',
    location: '',
    agree: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedClass) {
      setFormData(prev => ({ ...prev, className: selectedClass }));
    }
  }, [selectedClass]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // 간단한 검증
    if (!formData.className) {
      setErrorMessage('원하는 프로그램을 선택해 주세요.');
      return;
    }
    if (!formData.name.trim()) {
      setErrorMessage('이름을 입력해 주세요.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('연락처를 입력해 주세요.');
      return;
    }
    if (!formData.location.trim()) {
      setErrorMessage('사는 곳(지역)을 입력해 주세요.');
      return;
    }
    if (!formData.agree) {
      setErrorMessage('개인정보 수집 및 동의서에 동의해 주세요.');
      return;
    }

    // 로컬스토리지에 저장 (Mock)
    try {
      const existingSubmissions = JSON.parse(localStorage.getItem('gilmok_submissions') || '[]');
      const newSubmission = {
        ...formData,
        id: Date.now(),
        date: new Date().toISOString()
      };
      localStorage.setItem('gilmok_submissions', JSON.stringify([...existingSubmissions, newSubmission]));
      
      // 구글 앱스 스크립트(Google Apps Script) 등을 사용한 구글 시트 연동시 참고 코드:
      /*
      const GOOGLE_SHEET_API = import.meta.env.VITE_GOOGLE_SHEET_API;
      if (GOOGLE_SHEET_API) {
        fetch(GOOGLE_SHEET_API, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newSubmission)
        });
      }
      */
      
      setIsSubmitted(true);
      // Reset form
      setFormData({
        className: '',
        name: '',
        phone: '',
        location: '',
        agree: false
      });
      if (setSelectedClass) {
        setSelectedClass('');
      }
    } catch (err) {
      setErrorMessage('신청 과정 중 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <section id="apply" className="section apply">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">프로그램 참여 신청</h2>
          <p className="section-subtitle">배우고 소통하며 함께 성장하는 길목 커뮤니티의 일원이 되어보세요.</p>
        </div>

        <div className="apply-container">
          {isSubmitted ? (
            <div className="submit-success-card animate-fade-in-up">
              <div className="success-icon-wrapper">
                <Check size={48} className="success-icon" />
              </div>
              <h3>신청이 성공적으로 접수되었습니다!</h3>
              <p>기입해주신 연락처로 담당자가 2~3일 이내에 개별 연락을 드릴 예정입니다.</p>
              <button className="btn-primary" onClick={() => setIsSubmitted(false)}>
                추가 신청하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="apply-form">
              <div className="form-title-area">
                <ClipboardList size={24} className="form-title-icon" />
                <h3>참여 신청서 작성</h3>
              </div>

              {errorMessage && (
                <div className="form-error-alert">
                  {errorMessage}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="className">원하는 프로그램 <span className="required">*</span></label>
                <select
                  id="className"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- 프로그램을 선택해 주세요 --</option>
                  <option value="노래교실">노래교실</option>
                  <option value="손재주">손재주</option>
                  <option value="색채힐링">색채힐링</option>
                  <option value="건강마스터">건강마스터</option>
                  <option value="AI">AI</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="name">이름 <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="실명을 입력해 주세요"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">연락처 <span className="required">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="예: 010-1234-5678"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">사는 곳 (구/동 단위) <span className="required">*</span></label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="예: 동작구 사당동"
                  required
                />
              </div>

              <div className="form-group checkbox-group">
                <div className="privacy-box">
                  <h4>[개인정보 수집 및 이용 동의]</h4>
                  <p>
                    1. 수집 목적: 프로그램 참여 확인 및 본인 연락용<br />
                    2. 수집 항목: 이름, 연락처, 거주 지역<br />
                    3. 보유 및 이용 기간: 목적 달성 후 즉시 파기 (최대 6개월 보관)
                  </p>
                </div>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                  <span>개인정보 수집 및 이용에 동의합니다. <span className="required">*</span></span>
                </label>
              </div>

              <button type="submit" className="btn-submit">
                <Send size={18} style={{ marginRight: '8px' }} />
                신청 완료하기
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
