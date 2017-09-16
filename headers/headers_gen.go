package headers

// NOTE: THIS FILE WAS PRODUCED BY THE
// MSGP CODE GENERATION TOOL (github.com/tinylib/msgp)
// DO NOT EDIT

import (
	"github.com/tinylib/msgp/msgp"
)

// DecodeMsg implements msgp.Decodable
func (z *MethodCall) DecodeMsg(dc *msgp.Reader) (err error) {
	var field []byte
	_ = field
	var zbai uint32
	zbai, err = dc.ReadMapHeader()
	if err != nil {
		return
	}
	for zbai > 0 {
		zbai--
		field, err = dc.ReadMapKeyPtr()
		if err != nil {
			return
		}
		switch msgp.UnsafeString(field) {
		case "Module":
			z.Module, err = dc.ReadString()
			if err != nil {
				return
			}
		case "Method":
			z.Method, err = dc.ReadString()
			if err != nil {
				return
			}
		case "RKey":
			z.RKey, err = dc.ReadString()
			if err != nil {
				return
			}
		case "Header":
			var zcmr uint32
			zcmr, err = dc.ReadMapHeader()
			if err != nil {
				return
			}
			if z.Header == nil && zcmr > 0 {
				z.Header = make(map[string][]byte, zcmr)
			} else if len(z.Header) > 0 {
				for key, _ := range z.Header {
					delete(z.Header, key)
				}
			}
			for zcmr > 0 {
				zcmr--
				var zxvk string
				var zbzg []byte
				zxvk, err = dc.ReadString()
				if err != nil {
					return
				}
				zbzg, err = dc.ReadBytes(zbzg)
				if err != nil {
					return
				}
				z.Header[zxvk] = zbzg
			}
		default:
			err = dc.Skip()
			if err != nil {
				return
			}
		}
	}
	return
}

// EncodeMsg implements msgp.Encodable
func (z *MethodCall) EncodeMsg(en *msgp.Writer) (err error) {
	// map header, size 4
	// write "Module"
	err = en.Append(0x84, 0xa6, 0x4d, 0x6f, 0x64, 0x75, 0x6c, 0x65)
	if err != nil {
		return err
	}
	err = en.WriteString(z.Module)
	if err != nil {
		return
	}
	// write "Method"
	err = en.Append(0xa6, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64)
	if err != nil {
		return err
	}
	err = en.WriteString(z.Method)
	if err != nil {
		return
	}
	// write "RKey"
	err = en.Append(0xa4, 0x52, 0x4b, 0x65, 0x79)
	if err != nil {
		return err
	}
	err = en.WriteString(z.RKey)
	if err != nil {
		return
	}
	// write "Header"
	err = en.Append(0xa6, 0x48, 0x65, 0x61, 0x64, 0x65, 0x72)
	if err != nil {
		return err
	}
	err = en.WriteMapHeader(uint32(len(z.Header)))
	if err != nil {
		return
	}
	for zxvk, zbzg := range z.Header {
		err = en.WriteString(zxvk)
		if err != nil {
			return
		}
		err = en.WriteBytes(zbzg)
		if err != nil {
			return
		}
	}
	return
}

// MarshalMsg implements msgp.Marshaler
func (z *MethodCall) MarshalMsg(b []byte) (o []byte, err error) {
	o = msgp.Require(b, z.Msgsize())
	// map header, size 4
	// string "Module"
	o = append(o, 0x84, 0xa6, 0x4d, 0x6f, 0x64, 0x75, 0x6c, 0x65)
	o = msgp.AppendString(o, z.Module)
	// string "Method"
	o = append(o, 0xa6, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64)
	o = msgp.AppendString(o, z.Method)
	// string "RKey"
	o = append(o, 0xa4, 0x52, 0x4b, 0x65, 0x79)
	o = msgp.AppendString(o, z.RKey)
	// string "Header"
	o = append(o, 0xa6, 0x48, 0x65, 0x61, 0x64, 0x65, 0x72)
	o = msgp.AppendMapHeader(o, uint32(len(z.Header)))
	for zxvk, zbzg := range z.Header {
		o = msgp.AppendString(o, zxvk)
		o = msgp.AppendBytes(o, zbzg)
	}
	return
}

// UnmarshalMsg implements msgp.Unmarshaler
func (z *MethodCall) UnmarshalMsg(bts []byte) (o []byte, err error) {
	var field []byte
	_ = field
	var zajw uint32
	zajw, bts, err = msgp.ReadMapHeaderBytes(bts)
	if err != nil {
		return
	}
	for zajw > 0 {
		zajw--
		field, bts, err = msgp.ReadMapKeyZC(bts)
		if err != nil {
			return
		}
		switch msgp.UnsafeString(field) {
		case "Module":
			z.Module, bts, err = msgp.ReadStringBytes(bts)
			if err != nil {
				return
			}
		case "Method":
			z.Method, bts, err = msgp.ReadStringBytes(bts)
			if err != nil {
				return
			}
		case "RKey":
			z.RKey, bts, err = msgp.ReadStringBytes(bts)
			if err != nil {
				return
			}
		case "Header":
			var zwht uint32
			zwht, bts, err = msgp.ReadMapHeaderBytes(bts)
			if err != nil {
				return
			}
			if z.Header == nil && zwht > 0 {
				z.Header = make(map[string][]byte, zwht)
			} else if len(z.Header) > 0 {
				for key, _ := range z.Header {
					delete(z.Header, key)
				}
			}
			for zwht > 0 {
				var zxvk string
				var zbzg []byte
				zwht--
				zxvk, bts, err = msgp.ReadStringBytes(bts)
				if err != nil {
					return
				}
				zbzg, bts, err = msgp.ReadBytesBytes(bts, zbzg)
				if err != nil {
					return
				}
				z.Header[zxvk] = zbzg
			}
		default:
			bts, err = msgp.Skip(bts)
			if err != nil {
				return
			}
		}
	}
	o = bts
	return
}

// Msgsize returns an upper bound estimate of the number of bytes occupied by the serialized message
func (z *MethodCall) Msgsize() (s int) {
	s = 1 + 7 + msgp.StringPrefixSize + len(z.Module) + 7 + msgp.StringPrefixSize + len(z.Method) + 5 + msgp.StringPrefixSize + len(z.RKey) + 7 + msgp.MapHeaderSize
	if z.Header != nil {
		for zxvk, zbzg := range z.Header {
			_ = zbzg
			s += msgp.StringPrefixSize + len(zxvk) + msgp.BytesPrefixSize + len(zbzg)
		}
	}
	return
}

// DecodeMsg implements msgp.Decodable
func (z *MethodReturn) DecodeMsg(dc *msgp.Reader) (err error) {
	var field []byte
	_ = field
	var zhct uint32
	zhct, err = dc.ReadMapHeader()
	if err != nil {
		return
	}
	for zhct > 0 {
		zhct--
		field, err = dc.ReadMapKeyPtr()
		if err != nil {
			return
		}
		switch msgp.UnsafeString(field) {
		case "RKey":
			z.RKey, err = dc.ReadString()
			if err != nil {
				return
			}
		case "Err":
			z.Err, err = dc.ReadString()
			if err != nil {
				return
			}
		default:
			err = dc.Skip()
			if err != nil {
				return
			}
		}
	}
	return
}

// EncodeMsg implements msgp.Encodable
func (z MethodReturn) EncodeMsg(en *msgp.Writer) (err error) {
	// map header, size 2
	// write "RKey"
	err = en.Append(0x82, 0xa4, 0x52, 0x4b, 0x65, 0x79)
	if err != nil {
		return err
	}
	err = en.WriteString(z.RKey)
	if err != nil {
		return
	}
	// write "Err"
	err = en.Append(0xa3, 0x45, 0x72, 0x72)
	if err != nil {
		return err
	}
	err = en.WriteString(z.Err)
	if err != nil {
		return
	}
	return
}

// MarshalMsg implements msgp.Marshaler
func (z MethodReturn) MarshalMsg(b []byte) (o []byte, err error) {
	o = msgp.Require(b, z.Msgsize())
	// map header, size 2
	// string "RKey"
	o = append(o, 0x82, 0xa4, 0x52, 0x4b, 0x65, 0x79)
	o = msgp.AppendString(o, z.RKey)
	// string "Err"
	o = append(o, 0xa3, 0x45, 0x72, 0x72)
	o = msgp.AppendString(o, z.Err)
	return
}

// UnmarshalMsg implements msgp.Unmarshaler
func (z *MethodReturn) UnmarshalMsg(bts []byte) (o []byte, err error) {
	var field []byte
	_ = field
	var zcua uint32
	zcua, bts, err = msgp.ReadMapHeaderBytes(bts)
	if err != nil {
		return
	}
	for zcua > 0 {
		zcua--
		field, bts, err = msgp.ReadMapKeyZC(bts)
		if err != nil {
			return
		}
		switch msgp.UnsafeString(field) {
		case "RKey":
			z.RKey, bts, err = msgp.ReadStringBytes(bts)
			if err != nil {
				return
			}
		case "Err":
			z.Err, bts, err = msgp.ReadStringBytes(bts)
			if err != nil {
				return
			}
		default:
			bts, err = msgp.Skip(bts)
			if err != nil {
				return
			}
		}
	}
	o = bts
	return
}

// Msgsize returns an upper bound estimate of the number of bytes occupied by the serialized message
func (z MethodReturn) Msgsize() (s int) {
	s = 1 + 5 + msgp.StringPrefixSize + len(z.RKey) + 4 + msgp.StringPrefixSize + len(z.Err)
	return
}
