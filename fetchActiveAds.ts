import { metaAnalyticsTool } from './lib/tools/metaAnalyticsTool';

async function fetchActiveAds() {
  try {
    const result = await metaAnalyticsTool.func({
      action: 'active_ads',
      dateRange: '2024-03-01',
      limit: 5,
      fields: 'id,name,status,effective_status,campaign.id,campaign.name,campaign.objective,campaign.status,adset.id,adset.name,adset.status,creative.id,creative.title,creative.body,creative.image_url,creative.video_id,insights.impressions,insights.clicks,insights.spend,insights.ctr,insights.reach'
    });
    console.log('Active Ads Performance:', result);
  } catch (error) {
    console.error('Error fetching active ads:', error);
  }
}

fetchActiveAds(); 