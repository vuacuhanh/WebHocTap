import React, { useState } from 'react';
import "../changeUnit/cu.css";

const units = {
  length: {
    m: 1,
    cm: 100,
    mm: 1000,
    km: 0.001,
  },
  volume: {
    l: 1,
    ml: 1000,
    cl: 100,
  },
};

const ChangeUPage = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('cm');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    if (!value || isNaN(value)) {
      setResult('');
      return;
    }
    const factor = units[category][toUnit] / units[category][fromUnit];
    setResult((value * factor).toFixed(4));
  };

  return (
    <div className="container-change">
      <h2 className="caption-change">Chuyển đổi đơn vị</h2>
      <div className='main-change'>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Loại đơn vị:</label>
          <select
            className="tpye-unit w-full p-2 border rounded"
            value={category}
            onChange={(e) => {
              const newCategory = e.target.value;
              setCategory(newCategory);
              setFromUnit(Object.keys(units[newCategory])[0]);
              setToUnit(Object.keys(units[newCategory])[1]);
            }}
          >
            <option value="length">Chiều dài</option>
            <option value="volume">Thể tích</option>
          </select>
        </div>
        
        <div className="mb-4 box-change">
          <div className="flex items-center">
            <input
              type="text"
              className="input-unit"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Nhập số..."
            />
            <select
              className="ml-2 unit"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              {Object.keys(units[category]).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center justify-center my-2">
            <span>→</span>
          </div>
          
          <div className="flex items-center">
            <input
              type="text"
              className="input-unit"
              value={result || ''}
              readOnly
              placeholder="Kết quả"
            />
            <select
              className="ml-2 unit"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
            >
              {Object.keys(units[category]).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </div>

        <div className='box-btn-change'>
          <button className="btn-change" onClick={handleConvert}>
            Chuyển đổi
          </button>
        </div>

        {result && result.includes('Vui lòng') && (
          <p className="mt-4 text-lg font-medium text-red-500">Vui lòng nhập một số hợp lệ</p>
        )}
      </div>
    </div>
  );
};

export default ChangeUPage;
