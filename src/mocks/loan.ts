import { Info } from '@/mocks/types'
import { uid } from 'uid'

export const loanCampaign = [
	{
		id: uid(),
		campaignName: 'TNEX Finance',
		productCode: 'tnex',
		publisher: 'Công Ty Tài Chính TNHH MTV TNEX',
		category: 'loan',
		categoryDescription: 'thẻ tín dụng tín chấp',
		condition: '22 - 60 tuổi',
		commision: '3% ',
		suportArea:
			'30 tỉnh thành (Lâm Đồng, Bình Định, Tây Ninh, Đắk Lắk, Hồ Chí Minh, Hà Nội, Đà Nẵng, Bà Rịa - Vũng Tàu, Khánh Hòa, Bình Dương, Đồng Nai, Cần Thơ, Hải Phòng, An Giang, Bắc Ninh, Thanh Hóa, Quảng Ninh, Tiền Giang, Kiên Giang, Lào Cai, Nghệ An, Long An, Thái Nguyên, Bình Phước, Quảng Nam, Thừa Thiên Huế, Hưng Yên, Vĩnh Phúc, Thái Bình, Bắc Giang)',
		requiredCreditHistory: ' Không có nợ xấu, nợ chú ý trong vòng 12 tháng gần nhất',
		workingTime: 'tối thiểu 3 tháng tại đơn vị hiện tại',
		income: 'từ 7,000,000 đồng/ tháng',
		creditLimit: ['10,000,000 - 50,000,000 đồng'],
		interestRates: '',
		expires: '3 năm kể từ ngày phát hành',
		payments: 'toàn bộ dư nợ hoặc thanh toán tối thiểu theo sao kê',
		registration: {
			requied: 'CCCD',
			optional: 'Thẻ BHYT có đầu mã DN, HX,NN, TK, CH, HC, XK'
		},
		commissionPolicy: {
			status: 'Ghi nhận hoa hồng',
			description: 'thẻ phát hành thành công',
			commission: ['50,000 đ/ thẻ phát hành thành công'],
			tax: '15%'
		},
		image: 'https://w.ladicdn.com/60e5a6ef577a1e001299e3ac/26-20240228165608-e15dt.svg',
		createdAt: new Date(),
		cvr: '2.76%'
	},
	{
		id: uid(),
		campaignName: 'vay tín chấp SHB Finance',
		productCode: 'shbfinance',
		publisher: 'công ty Tài Chính TNHH Ngân hàng TMCP Sài Gòn - Hà Nội (SHBFinance)',
		category: 'loan',
		categoryDescription: 'thẻ tín dụng tín chấp',
		condition: '22 - 60 tuổi',
		commision: '2.5%',
		suportArea:
			'30 tỉnh thành (Lâm Đồng, Bình Định, Tây Ninh, Đắk Lắk, Hồ Chí Minh, Hà Nội, Đà Nẵng, Bà Rịa - Vũng Tàu, Khánh Hòa, Bình Dương, Đồng Nai, Cần Thơ, Hải Phòng, An Giang, Bắc Ninh, Thanh Hóa, Quảng Ninh, Tiền Giang, Kiên Giang, Lào Cai, Nghệ An, Long An, Thái Nguyên, Bình Phước, Quảng Nam, Thừa Thiên Huế, Hưng Yên, Vĩnh Phúc, Thái Bình, Bắc Giang)',
		requiredCreditHistory: ' Không có nợ xấu, nợ chú ý trong vòng 12 tháng gần nhất',
		workingTime: 'tối thiểu 3 tháng tại đơn vị hiện tại',
		income: 'từ 7,000,000 đồng/ tháng',
		creditLimit: ['10,000,000 - 50,000,000 đồng'],
		interestRates: '',
		expires: '3 năm kể từ ngày phát hành',
		payments: 'toàn bộ dư nợ hoặc thanh toán tối thiểu theo sao kê',
		registration: {
			requied: 'CCCD',
			optional: 'Thẻ BHYT có đầu mã DN, HX,NN, TK, CH, HC, XK'
		},
		commissionPolicy: {
			status: 'Ghi nhận hoa hồng',
			description: 'thẻ phát hành thành công',
			commission: ['50,000 đ/ thẻ phát hành thành công'],
			tax: '15%'
		},
		image: 'https://w.ladicdn.com/60e5a6ef577a1e001299e3ac/logo-fimipsd-8-20240317043144-jieih.svg',
		createdAt: new Date(),
		cvr: '2.76%'
	},
	{
		id: uid(),
		campaignName: 'TNEX Finance LEAD',
		productCode: 'tnexlead',
		publisher: 'Công Ty Tài Chính TNHH MTV TNEX',
		category: 'loan',
		categoryDescription: 'thẻ tín dụng tín chấp',
		condition: '22 - 60 tuổi',
		commision: '2.5%',
		suportArea:
			'30 tỉnh thành (Lâm Đồng, Bình Định, Tây Ninh, Đắk Lắk, Hồ Chí Minh, Hà Nội, Đà Nẵng, Bà Rịa - Vũng Tàu, Khánh Hòa, Bình Dương, Đồng Nai, Cần Thơ, Hải Phòng, An Giang, Bắc Ninh, Thanh Hóa, Quảng Ninh, Tiền Giang, Kiên Giang, Lào Cai, Nghệ An, Long An, Thái Nguyên, Bình Phước, Quảng Nam, Thừa Thiên Huế, Hưng Yên, Vĩnh Phúc, Thái Bình, Bắc Giang)',
		requiredCreditHistory: ' Không có nợ xấu, nợ chú ý trong vòng 12 tháng gần nhất',
		workingTime: 'tối thiểu 3 tháng tại đơn vị hiện tại',
		income: 'từ 7,000,000 đồng/ tháng',
		creditLimit: ['10,000,000 - 50,000,000 đồng'],
		interestRates: '',
		expires: '3 năm kể từ ngày phát hành',
		payments: 'toàn bộ dư nợ hoặc thanh toán tối thiểu theo sao kê',
		registration: {
			requied: 'CCCD',
			optional: 'Thẻ BHYT có đầu mã DN, HX,NN, TK, CH, HC, XK'
		},
		commissionPolicy: {
			status: 'Ghi nhận hoa hồng',
			description: 'thẻ phát hành thành công',
			commission: ['50,000 đ/ thẻ phát hành thành công'],
			tax: '15%'
		},
		image: 'https://w.ladicdn.com/60e5a6ef577a1e001299e3ac/26-20240228165608-e15dt.svg',
		createdAt: new Date(),
		cvr: '2.76%'
	}
] satisfies Info[]
