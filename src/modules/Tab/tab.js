import React, { useState } from 'react';
import './tabStyles.css';
import menu from './menu.svg';

const ContentConfig = {
  'Tab One': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non lorem nisi. Donec dapibus placerat elit, vitae aliquam lectus lobortis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas velit urna, rutrum vel fringilla vel, imperdiet ut lectus. Sed accumsan dolor id eros efficitur, quis convallis ipsum scelerisque. Morbi tincidunt elit quis tincidunt rhoncus. Aliquam lectus massa, pretium vel lorem a, accumsan suscipit nulla. Nullam et maximus dolor. Nunc bibendum neque non dapibus aliquet. Phasellus id nulla vitae est consectetur mollis. Ut auctor nisl at turpis feugiat, in gravida dolor venenatis. Integer accumsan eros enim, vitae ullamcorper ex vulputate at.",
  'Tab Two': "Lorem ipsum dolor sit amet. Donec dapibus placerat elit, vitae aliquam lectus lobortis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas velit urna, rutrum vel fringilla vel, imperdiet ut lectus. Sed accumsan dolor id eros efficitur, quis convallis ipsum scelerisque. Morbi tincidunt elit quis tincidunt rhoncus. Aliquam lectus massa, pretium vel lorem a, accumsan suscipit nulla. Nullam et maximus dolor. Nunc bibendum neque non dapibus aliquet. Phasellus id nulla vitae est consectetur mollis. Ut auctor nisl at turpis feugiat, in gravida dolor venenatis. Integer accumsan eros enim, vitae ullamcorper ex vulputate at.",
  'Tab with looooong title': "Lorem ipsum dolor sit amet, XXX-XXX-XXX . In non lorem nisi. Donec dapibus placerat elit, vitae aliquam lectus lobortis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas velit urna, rutrum vel fringilla vel, imperdiet ut lectus. Sed accumsan dolor id eros efficitur, quis convallis ipsum scelerisque. Morbi tincidunt elit quis tincidunt rhoncus. Aliquam lectus massa, pretium vel lorem a, accumsan suscipit nulla. Nullam et maximus dolor. Nunc bibendum neque non dapibus aliquet. Phasellus id nulla vitae est consectetur mollis. Ut auctor nisl at turpis feugiat, in gravida dolor venenatis. Integer accumsan eros enim, vitae ullamcorper ex vulputate at.",
  'Tab with looooong title 1': "Lorem ipsum dolor sit amet, XXX-XXX-XXX . In non lorem nisi. Donec dapibus placerat elit, vitae aliquam lectus lobortis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas velit urna, rutrum vel fringilla vel, imperdiet ut lectus. Sed accumsan dolor id eros efficitur, quis convallis ipsum scelerisque. Morbi tincidunt elit quis tincidunt rhoncus. Aliquam lectus massa, pretium vel lorem a, accumsan suscipit nulla. Nullam et maximus dolor. Nunc bibendum neque non dapibus aliquet. Phasellus id nulla vitae est consectetur mollis. Ut auctor nisl at turpis feugiat, in gravida dolor venenatis. Integer accumsan eros enim, vitae ullamcorper ex vulputate at.",
  'Tab with looooong title 2': "Lorem ipsum dolor sit amet, XXX-XXX-XXX . In non lorem nisi. Donec dapibus placerat elit, vitae aliquam lectus lobortis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas velit urna, rutrum vel fringilla vel, imperdiet ut lectus. Sed accumsan dolor id eros efficitur, quis convallis ipsum scelerisque. Morbi tincidunt elit quis tincidunt rhoncus. Aliquam lectus massa, pretium vel lorem a, accumsan suscipit nulla. Nullam et maximus dolor. Nunc bibendum neque non dapibus aliquet. Phasellus id nulla vitae est consectetur mollis. Ut auctor nisl at turpis feugiat, in gravida dolor venenatis. Integer accumsan eros enim, vitae ullamcorper ex vulputate at.",
  'Tab with looooong title 3': "Lorem ipsum dolor sit amet, XXX-XXX-XXX . In non lorem nisi. Donec dapibus placerat elit, vitae aliquam lectus lobortis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas velit urna, rutrum vel fringilla vel, imperdiet ut lectus. Sed accumsan dolor id eros efficitur, quis convallis ipsum scelerisque. Morbi tincidunt elit quis tincidunt rhoncus. Aliquam lectus massa, pretium vel lorem a, accumsan suscipit nulla. Nullam et maximus dolor. Nunc bibendum neque non dapibus aliquet. Phasellus id nulla vitae est consectetur mollis. Ut auctor nisl at turpis feugiat, in gravida dolor venenatis. Integer accumsan eros enim, vitae ullamcorper ex vulputate at.",
  'Tab with looooong title 4': "Lorem ipsum dolor sit amet, XXX-XXX-XXX . In non lorem nisi. Donec dapibus placerat elit, vitae aliquam lectus lobortis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas velit urna, rutrum vel fringilla vel, imperdiet ut lectus. Sed accumsan dolor id eros efficitur, quis convallis ipsum scelerisque. Morbi tincidunt elit quis tincidunt rhoncus. Aliquam lectus massa, pretium vel lorem a, accumsan suscipit nulla. Nullam et maximus dolor. Nunc bibendum neque non dapibus aliquet. Phasellus id nulla vitae est consectetur mollis. Ut auctor nisl at turpis feugiat, in gravida dolor venenatis. Integer accumsan eros enim, vitae ullamcorper ex vulputate at.",
  'Tab with looooong title 5': "Lorem ipsum dolor sit amet, XXX-XXX-XXX . In non lorem nisi. Donec dapibus placerat elit, vitae aliquam lectus lobortis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas velit urna, rutrum vel fringilla vel, imperdiet ut lectus. Sed accumsan dolor id eros efficitur, quis convallis ipsum scelerisque. Morbi tincidunt elit quis tincidunt rhoncus. Aliquam lectus massa, pretium vel lorem a, accumsan suscipit nulla. Nullam et maximus dolor. Nunc bibendum neque non dapibus aliquet. Phasellus id nulla vitae est consectetur mollis. Ut auctor nisl at turpis feugiat, in gravida dolor venenatis. Integer accumsan eros enim, vitae ullamcorper ex vulputate at.",
  'Tab with looooong title 6': "Lorem ipsum dolor sit amet, XXX-XXX-XXX . In non lorem nisi. Donec dapibus placerat elit, vitae aliquam lectus lobortis vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas velit urna, rutrum vel fringilla vel, imperdiet ut lectus. Sed accumsan dolor id eros efficitur, quis convallis ipsum scelerisque. Morbi tincidunt elit quis tincidunt rhoncus. Aliquam lectus massa, pretium vel lorem a, accumsan suscipit nulla. Nullam et maximus dolor. Nunc bibendum neque non dapibus aliquet. Phasellus id nulla vitae est consectetur mollis. Ut auctor nisl at turpis feugiat, in gravida dolor venenatis. Integer accumsan eros enim, vitae ullamcorper ex vulputate at.",
};

function Tab({ tabsConfig = ContentConfig }) {
  const TabsTitle = Object.keys(tabsConfig);
  const [selected, setSelected] = useState(TabsTitle[0]);

  return (
    <div className="container">
      <div className="tab-container">
        {TabsTitle.map(tab => (
          <button
            onClick={() => setSelected(tab)}
            className={selected === tab ? 'active' : ''}
          >
            {tab}
          </button>
        ))}
        <div>
          <button className="show-more">
            <img src={menu} alt="menu" />
          </button>
        </div>
      </div>
      {tabsConfig[selected] && (
        <div className="content">
          <h1>Heading for {selected.toLowerCase()}</h1>
          <p>{tabsConfig[selected]}</p>
        </div>
      )}
    </div>
  );
}

export default Tab;
