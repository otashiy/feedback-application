import FeatureRadio from "../feature-radio/feature-radio";
import "./features-filter.scss";

const FeaturesFilter = () => {
return (
<>
<div className="features-filter">
<FeatureRadio className="feature-filter__title" name="radio">All</FeatureRadio>
<FeatureRadio className="feature-filter__title" name="radio">UI</FeatureRadio>
<FeatureRadio className="feature-filter__title" name="radio">UX</FeatureRadio>
<FeatureRadio className="feature-filter__title" name="radio">Enhancement</FeatureRadio>
<FeatureRadio className="feature-filter__title" name="radio">Bug</FeatureRadio>
<FeatureRadio className="feature-filter__title" name="radio">Feature</FeatureRadio>
</div>
</>
);
}
export default FeaturesFilter;