import React from 'react';
import { Link } from 'react-router-dom';
import './LanguageSelector.scss';

const languages = [
  { code: 'es', name: 'Spanish', flagImageUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/62268/spain-flag-emoji-clipart-xl.png' },
  { code: 'fr', name: 'French', flagImageUrl: 'https://em-content.zobj.net/source/toss-face/381/flag-france_1f1eb-1f1f7.png' },
  { code: 'de', name: 'German', flagImageUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/62383/germany-flag-emoji-clipart-md.png' },
  { code: 'it', name: 'Italian', flagImageUrl: 'https://flagpedia.net/data/flags/emoji/twitter/256x256/it.png' },

];

const LanguageSelector = () => {
  return (
    <div className="language-selector">
      {languages.map(language => (
        <Link key={language.code} to={`/${language.code}`} className="language-option">
          <img src={language.flagImageUrl} alt={`${language.name} flag`} />
          <span className="language-name">{language.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default LanguageSelector;
