import React from 'react';

import Tabs from '../tabs';
import Contents from '../contents';

const Filter = (props) => {
  const {classTabs, classContents, tabs, itemSelected, onChangeItem, contents, hasLabel} = props;

  return(
    <React.Fragment>
      <ul className={classTabs}>
        <Tabs
          tabs={tabs}
          tabSelected={itemSelected}
          onChangeTab={onChangeItem}
        />
      </ul>
      <div className={`${classContents}`}>
        <Contents
          contents={contents}
          contentSelected={itemSelected}
          hasLabel={hasLabel}
        />
      </div>
    </React.Fragment>
  );
};

export default Filter;