import FeatureRadio from "../categories-radio/categories-radio";
import "./categories-filter.scss";

const CategoriesFilter = () => {
return (
<>
<fieldset className="categories-filter">
<FeatureRadio className="categoires-filter__title" name="radio">All</FeatureRadio>
<FeatureRadio className="categoires-filter__title" name="radio">UI</FeatureRadio>
<FeatureRadio className="categoires-filter__title" name="radio">UX</FeatureRadio>
<FeatureRadio className="categoires-filter__title" name="radio">Enhancement</FeatureRadio>
<FeatureRadio className="categoires-filter__title" name="radio">Bug</FeatureRadio>
<FeatureRadio className="categoires-filter__title" name="radio">Feature</FeatureRadio>
</fieldset>
</>
);
}
export default CategoriesFilter;